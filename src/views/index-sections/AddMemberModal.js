import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import LinearLoading from "./LinearLoading";
import ErrorBar from "./ErrorBar";
import imageCompression from "browser-image-compression";
import {config} from "../../config"
import React from 'react';
import {defaultProfile} from "../../model";

import {
    Button,
    Form,
    Input,
    InputGroup,
    Modal,
    ModalBody,
    Row,
    Col,
} from "reactstrap";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import {memberAction} from "../../redux/actions";

const axios = require("axios");
const Img = require('react-image')


class AddMember extends React.Component {

    toggle(name) {
        if (name && name == 'occupationDropDown') {
            this.setState({
                occupationDropDown: !this.state.occupationDropDown
            });
        } else if (name && name == 'maritalStatusDropDown') {
            this.setState({
                maritalStatusDropDown: !this.state.maritalStatusDropDown
            });
        } else if (name && name == 'membershipTypeDropDown') {
            this.setState({
                membershipTypeDropDown: !this.state.membershipTypeDropDown
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            occupationDropDown: false,
            maritalStatusDropDown: false,
            membershipTypeDropDown: false,
            isAdding: false,
            isError: false,
            isSuccess: false,
            fileUploadError: false,
            modal1: false,
            firstFocus: false,
            lastFocus: false,
            isUpdate: false,
            file: require("assets/img/nobody.jpg"),
            profile: defaultProfile,
            response: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.uploadProfile = this.uploadProfile.bind(this);
        this.getFile = this.getFile.bind(this);
        this.getKidsSonFields = this.getKidsSonFields.bind(this);
        this.getKidsDaughterFields = this.getKidsDaughterFields.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleKidsCountChange = this.handleKidsCountChange.bind(this);
        this.getKidsDaughterFields = this.getKidsDaughterFields.bind(this);
        this.getKidsSonFields = this.getKidsSonFields.bind(this);
        this.handlePartnerDetailChange = this.handlePartnerDetailChange.bind(this);
        this.handleFamilyHistoryDetailChange = this.handleFamilyHistoryDetailChange.bind(this);
        this.addSonDetail = this.addSonDetail.bind(this);
        this.handleDaughterDetailChange = this.handleDaughterDetailChange.bind(this);
        this.handleSonsDetailChange = this.handleSonsDetailChange.bind(this);
    }

    componentDidMount() {
        const {profile, isUpdate} = this.props;
        if (profile) {
            this.setState({
                profile, isUpdate, memberId: profile.memberId
            });
        }
    }

    handleChange(e) {
        this.setState({
            profile: {...this.state.profile, [e.target.name]: e.target.value}
        });
    }

    addSonDetail() {
        const newInput = `son-${this.state.sonDetail.length}`;
        this.setState({
            sonDetail: [...this.state.sonDetail, newInput]
        });
    }

    handlePhoneChange(e) {
        this.setState({
            profile: {...this.state.profile, phone: {...this.state.profile.phone, [e.target.name]: e.target.value}}
        });
    }

    handleFamilyHistoryDetailChange(e) {
        this.setState({
            profile: {
                ...this.state.profile,
                familyHistory: {...this.state.profile.familyHistory, [e.target.name]: e.target.value}
            }
        });
    }

    handlePartnerDetailChange(e) {
        this.setState({
            profile: {
                ...this.state.profile,
                partnerDetail: {...this.state.profile.partnerDetail, [e.target.name]: e.target.value}
            }
        });
    }

    handleSonsDetailChange(e) {
        this.setState({
                profile: {
                    ...this.state.profile,
                    kidsDetail:
                        {
                            ...this.state.profile.kidsDetail, sonDetail:
                                {
                                    ...this.state.profile.kidsDetail.sonDetail, [e.target.id]: {
                                        ...this.state.profile.kidsDetail.sonDetail[e.target.id],
                                        [e.target.name]: [e.target.value]
                                    }
                                }
                        }
                }
            }
        );
    }

    handleDaughterDetailChange(e) {
        this.setState({
                profile: {
                    ...this.state.profile,
                    kidsDetail:
                        {
                            ...this.state.profile.kidsDetail, daughterDetail:
                                {
                                    ...this.state.profile.kidsDetail.daughterDetail, [e.target.id]: {
                                        ...this.state.profile.kidsDetail.daughterDetail[e.target.id],
                                        [e.target.name]: [e.target.value]
                                    }
                                }
                        }
                }
            }
        );
    }

    handleKidsCountChange(e) {
        this.setState({
            profile: {
                ...this.state.profile,
                kidsCount: {...this.state.profile.kidsCount, [e.target.name]: e.target.value}
            }
        });
    }

    handleAddressChange(e) {
        this.setState({
            profile: {...this.state.profile, address: {...this.state.profile.address, [e.target.name]: e.target.value}}
        });
    }

    handleDropDown(e) {
        this.setState({
            profile: {...this.state.profile, [e.target.name]: e.target.innerText}
        });
    }


    uploadImage(callback) {
        const self = this;
        const {profile} = self.state;

        const fileUploadUrl = `${config.API_URL}/fileUpload`;

        let remoteFileUrl = null;
        if (profile && profile.file && profile.file instanceof Blob) {
            let file = profile.file;
            const fileName = file.name;
            const options = {
                maxSizeMB: 1
            };
            imageCompression(file, options)
            .then(function (compressedFile) {
                console.log(
                    `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
                ); // smaller than maxSizeMB
                axios
                .post(fileUploadUrl, {name: fileName})
                .then(function (response) {
                    const responseBody = response.data;
                    const formData = new FormData();
                    Object.keys(responseBody.fields).forEach(key => {
                        formData.append(key, responseBody.fields[key]);
                    });
                    formData.append("file", compressedFile);
                    const uploadURL = responseBody.url;
                    remoteFileUrl = responseBody.fileUrl;
                    axios
                    .post(uploadURL, formData)
                    .then(function (response) {
                        self.setState({
                            profile: {
                                ...self.state.profile,
                                profilePic: remoteFileUrl
                            }
                        });
                        callback();
                    })
                    .catch(function (error) {
                        self.setState({
                            isError: true
                        });
                        console.log("Image Upload error: ", error);
                    });
                })
                .catch(function (error) {
                    self.setState({
                        fileUploadError: true
                    });
                });
            })
            .catch(function (error) {
                console.log(error.message);
            });
        } else {
            callback();
        }
    }

    uploadProfile() {
        const self = this;
        const {profile} = self.state;
        let url = `${config.API_URL}/members`;
        let method = "POST";
        if (this.state.isUpdate && profile.memberId && profile.memberId !== "") {
            url = `${url}/${profile.memberId}`
            method = "PUT";
        }
        axios({url, method, data: profile})
        .then(function (response) {
            self.setState({
                isAdding: false,
                isError: false,
                isSuccess: true,
                response: response.data
            });
            setTimeout(
                function () {
                    this.setState({isSuccess: false, modal1: false, profile: defaultProfile});
                    this.props.getAllMembers();
                    const {isUpdate, memberId} = this.state;
                    if (isUpdate && memberId) {
                        this.props.getOneMember(memberId);
                    }
                }.bind(self),
                1500
            );
        })
        .catch(function (error) {
            self.setState({
                isAdding: false,
                isError: true,
                isSuccess: false,
                response: error.response && error.response.data ? error.response.data : error.response
            });
        });
    }

    handleForm(e) {
        e.preventDefault();
        this.setState({
            isAdding: true,
            isError: false,
            isSuccess: false
        });
        console.log("Form Submit");
        this.uploadImage(this.uploadProfile);
    }

    handleFileUpload(event) {
        if (event.target.files[0]) {
            this.setState({
                file: URL.createObjectURL(event.target.files[0])
            });
        }
        this.setState({
            profile: {
                ...this.state.profile,
                [event.target.name]: event.target.files[0],
                fileUrl: URL.createObjectURL(event.target.files[0])
            }
        });
    }

    getFile() {
        const {profile, file} = this.state;
        if (profile.fileUrl && profile.fileUrl !== "" && profile.fileUrl !== {}) {
            return profile.fileUrl;
        } else if (profile.profilePic && profile.profilePic !== "") {
            return profile.profilePic;
        } else {
            return file
        }

    }

    getKidsSonFields() {
        const {profile} = this.state;
        const sonCount = profile.kidsCount.sonCount > 5 ? 4 : profile.kidsCount.sonCount;
        const sonCountIndex = [];
        for (let i = 0; i < sonCount; i++) {
            sonCountIndex.push(`son${i}`);
        }
        return sonCount ? sonCountIndex.map((input, i) => {
            const hasValue = !!profile.kidsDetail.sonDetail[input];
            console.log("Son Detail: ", profile.kidsDetail.sonDetail);
                return (
                    <Row key={input}>
                        <Col>
                            <InputGroup>
                                {" "}
                                <Input
                                    value={profile.kidsDetail.sonDetail[input].name ||  ""}
                                    name="name"
                                    id={input}
                                    placeholder="Son's Name"
                                    type="text"
                                    onChange={this.handleSonsDetailChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                {" "}
                                <Input
                                    value={profile.kidsDetail.sonDetail[input].dob || ""}
                                    name="dob"
                                    id={input}
                                    placeholder="Son's DOB"
                                    type="text"
                                    onChange={this.handleSonsDetailChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup>
                                {" "}
                                <Input
                                    value={profile.kidsDetail.sonDetail[input].wifeName || ""}
                                    name="wifeName"
                                    id={input}
                                    placeholder="Daughter in law's Name"
                                    type="text"
                                    onChange={this.handleSonsDetailChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                {" "}
                                <Input
                                    value={profile.kidsDetail.sonDetail[input].wifeDob || ""}
                                    name="wifeDob"
                                    id={input}
                                    placeholder="Daughter in law's DOB"
                                    type="text"
                                    onChange={this.handleSonsDetailChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                )
            }
        ) : "";
    }

    getKidsDaughterFields() {
        const {profile} = this.state;
        const daughterCount = profile.kidsCount.daughterCount > 5 ? 4 : profile.kidsCount.daughterCount;
        const daughterCountIndex = [];
        for (let i = 0; i < daughterCount; i++) {
            daughterCountIndex.push(`daughter${i}`);
        }
        console.log("kidsDetail detail", profile.kidsDetail);
        return daughterCount ? daughterCountIndex.map((input, i) => {
            return (
                    <Row key={input}>
                        <Col>
                            <InputGroup>
                                {" "}
                                <Input
                                    value={profile.kidsDetail.daughterDetail[input].name ||  ""}
                                    name="name"
                                    id={input}
                                    placeholder="Daughter's Name"
                                    type="text"
                                    onChange={this.handleDaughterDetailChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                {" "}
                                <Input
                                    value={profile.kidsDetail.daughterDetail[input].dob || ""}
                                    name="dob"
                                    id={input}
                                    placeholder="Daughter's DOB"
                                    type="text"
                                    onChange={this.handleDaughterDetailChange}
                                />
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup>
                                {" "}
                                <Input
                                    value={profile.kidsDetail.daughterDetail[input].husbandName || ""}
                                    name="husbandName"
                                    id={input}
                                    placeholder="Son in law's Name"
                                    type="text"
                                    onChange={this.handleDaughterDetailChange}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup>
                                {" "}
                                <Input
                                    value={profile.kidsDetail.daughterDetail[input].husbandDob || ""}
                                    name="husbandDob"
                                    id={input}
                                    placeholder="Son in law's DOB"
                                    type="text"
                                    onChange={this.handleDaughterDetailChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                )
            }
        ) : "";
    }


    render() {

        const {isAdding, isError, isSuccess, response, profile, isUpdate, maritalStatusDropDown, occupationDropDown, membershipTypeDropDown} = this.state;
        return (
            <>
                <div id="javascriptComponents">
                    <Row id="modals">
                        <Col>
                            <Button
                                color="info"
                                className="btn-round"
                                onClick={() => this.setState({modal1: true})}
                            >
                                {isUpdate ? "सदस्य अपडेट गर्नुहोस्" : "नयाँ सदस्य थप्नुहोस्"}
                            </Button>
                            <Modal
                                className={"modal-lg"}
                                isOpen={this.state.modal1}
                                toggle={() =>
                                    isUpdate ?
                                        this.setState({
                                            isSuccess: false,
                                            modal1: false,
                                        }) :
                                        this.setState({
                                            isSuccess: false,
                                            modal1: false,
                                            profile: {},
                                            file: require("assets/img/nobody.jpg"),
                                        })

                                }
                            >
                                <div className="modal-header justify-content-center">
                                    <button
                                        className="close"
                                        type="button"
                                        onClick={() => this.setState({
                                            modal1: false,
                                            isSuccess: false,

                                        })}
                                    >
                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                    </button>
                                    <h4 className="title title-up">{isUpdate ? "सदस्य अपडेट गर्नुहोस्" : "नयाँ सदस्य थप्नुहोस्"}</h4>
                                </div>
                                <ModalBody>
                                    <Form action="" className="form" method="">
                                        <Row>
                                            <Col>
                                                <div className="profile-photo-container">
                                                    <Img alt="img" src={
                                                        this.getFile()
                                                    }/>
                                                </div>
                                                <InputGroup className="content-center">
                                                    <label htmlFor="file">फोटो चुन्नुहोस्</label>
                                                    <Input
                                                        name="file"
                                                        style={{display: "none"}}
                                                        id="file"
                                                        placeholder="Picture"
                                                        type="file"
                                                        accept="image/x-png,image/gif,image/jpeg"
                                                        onChange={this.handleFileUpload}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        readOnly={isUpdate}
                                                        value={profile.memberId || ""}
                                                        name="memberId"
                                                        placeholder="Member Id..."
                                                        type="number"
                                                        onChange={this.handleChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.name || ""}
                                                        name="name"
                                                        placeholder="Name..."
                                                        type="text"
                                                        onChange={this.handleChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.dob || ""}
                                                        name="dob"
                                                        placeholder="Date of Birth..."
                                                        type="text"
                                                        onChange={this.handleChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.phone.mobile || ""}
                                                        name="mobile"
                                                        placeholder="Mobile NUmber"
                                                        type="number"
                                                        onChange={this.handlePhoneChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.phone.telephone || ""}
                                                        name="telephone"
                                                        placeholder="Telephone NUmber"
                                                        type="number"
                                                        onChange={this.handlePhoneChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.address.permanentAddress || ""}
                                                        name="permanentAddress"
                                                        placeholder="Permanent Address"
                                                        type="text"
                                                        onChange={this.handleAddressChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.address.temporaryAddress || ""}
                                                        name="temporaryAddress"
                                                        placeholder="Temporary Address"
                                                        type="text"
                                                        onChange={this.handleAddressChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Dropdown isOpen={occupationDropDown}
                                                          toggle={() => this.toggle("occupationDropDown")}>
                                                    <DropdownToggle caret>
                                                        {profile.occupation || 'Occupation'}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem name="occupation" value={profile.occupation}
                                                                      onClick={this.handleDropDown}>Business</DropdownItem>
                                                        <DropdownItem name="occupation" value={profile.occupation}
                                                                      onClick={this.handleDropDown}>Farming</DropdownItem>
                                                        <DropdownItem name="occupation" value={profile.occupation}
                                                                      onClick={this.handleDropDown}>Other</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>

                                            </Col>
                                            <Col>
                                                <Dropdown isOpen={membershipTypeDropDown}
                                                          toggle={() => this.toggle("membershipTypeDropDown")}>
                                                    <DropdownToggle caret>
                                                        {profile.typeOfMembership || 'Membership Type'}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem name="typeOfMembership"
                                                                      onClick={this.handleDropDown}>Monthly
                                                            Member</DropdownItem>
                                                        <DropdownItem name="typeOfMembership"
                                                                      onClick={this.handleDropDown}>Life Time
                                                            Member</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>


                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr></hr>
                                                {/* Family History */}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.familyHistory.fatherName || ""}
                                                        name="fatherName"
                                                        placeholder="Father's Name"
                                                        type="text"
                                                        onChange={this.handleFamilyHistoryDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.familyHistory.fatherDOB || ""}
                                                        name="fatherDOB"
                                                        placeholder="Father's Date of Birth"
                                                        type="text"
                                                        onChange={this.handleFamilyHistoryDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.familyHistory.motherName || ""}
                                                        name="motherName"
                                                        placeholder="Mother's Name"
                                                        type="text"
                                                        onChange={this.handleFamilyHistoryDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.familyHistory.motherDOB || ""}
                                                        name="motherDOB"
                                                        placeholder="Mother's Date of Birth"
                                                        type="text"
                                                        onChange={this.handleFamilyHistoryDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.familyHistory.grandFatherName || ""}
                                                        name="grandFatherName"
                                                        placeholder="Grand Father's Name"
                                                        type="text"
                                                        onChange={this.handleFamilyHistoryDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.familyHistory.grandFatherDOB || ""}
                                                        name="grandFatherDOB"
                                                        placeholder="Grand Father's Date of Birth"
                                                        type="text"
                                                        onChange={this.handleFamilyHistoryDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.familyHistory.grandMotherName || ""}
                                                        name="grandMotherName"
                                                        placeholder="Grand Mother's Name"
                                                        type="text"
                                                        onChange={this.handleFamilyHistoryDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.familyHistory.grandMotherDOB || ""}
                                                        name="grandMotherDOB"
                                                        placeholder="Grand Mother's Date of Birth"
                                                        type="text"
                                                        onChange={this.handleFamilyHistoryDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Dropdown isOpen={maritalStatusDropDown}
                                                          toggle={() => this.toggle("maritalStatusDropDown")}>
                                                    <DropdownToggle caret>
                                                        {profile.maritalStatus || 'Marital Status'}
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem name="maritalStatus"
                                                                      onClick={this.handleDropDown}>Married</DropdownItem>
                                                        <DropdownItem name="maritalStatus"
                                                                      onClick={this.handleDropDown}>Unmarried</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.kidsCount.sonCount || ""}
                                                        name="sonCount"
                                                        placeholder="Son's count"
                                                        type="text"
                                                        onChange={this.handleKidsCountChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.kidsCount.daughterCount || ""}
                                                        name="daughterCount"
                                                        placeholder="Daughter's count"
                                                        type="text"
                                                        onChange={this.handleKidsCountChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        {profile.maritalStatus == 'Married' &&
                                        <Row>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.partnerDetail.name || ""}
                                                        name="name"
                                                        placeholder="Partner's Name"
                                                        type="text"
                                                        onChange={this.handlePartnerDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.partnerDetail.dob || ""}
                                                        name="dob"
                                                        placeholder="Partner's DOB"
                                                        type="text"
                                                        onChange={this.handlePartnerDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    {" "}
                                                    <Input
                                                        value={profile.partnerDetail.phone || ""}
                                                        name="phone"
                                                        placeholder="Partner's Phone"
                                                        type="text"
                                                        onChange={this.handlePartnerDetailChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        }

                                        {profile.kidsCount.sonCount && profile.kidsCount.sonCount != 0 && <Row>
                                            <Col>
                                                <hr></hr>
                                                {/* Family History */}
                                            </Col>
                                        </Row>}
                                        {this.getKidsSonFields()}
                                        {profile.kidsCount.daughterCount && profile.kidsCount.daughterCount != 0 && <Row>
                                            <Col>
                                                <hr></hr>
                                                {/* Family History */}
                                            </Col>
                                        </Row>}
                                        {this.getKidsDaughterFields()}

                                        <div>
                                            {isAdding && <LinearLoading/>}
                                            {isSuccess && (
                                                <ErrorBar
                                                    type="success"
                                                    message={isUpdate ? `User Updated. Member: ${profile.memberId}` : `New User Added. Member: ${response.memberId}`}
                                                />
                                            )}
                                            {isError && <ErrorBar
                                                message={response && response.errorMessage ? response.errorMessage : "Something went wrong. Please try again."}/>}
                                        </div>
                                        <Row className="content-center">
                                            <Col>
                                                <Button
                                                    color="danger"
                                                    type="button"
                                                    onClick={this.handleForm}
                                                >
                                                    {isUpdate ? "Update" : "Add"}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </ModalBody>

                            </Modal>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getAllMembers: () => {
        dispatch(memberAction.getAllMember());
    },
    getOneMember: (id) => {
        dispatch(memberAction.getOneMember(id));
    }
});

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(AddMember);
