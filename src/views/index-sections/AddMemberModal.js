import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import LinearLoading from "./LinearLoading";
import ErrorBar from "./ErrorBar";
import imageCompression from "browser-image-compression";
import {config} from "../../config"


import {
  Button,
  Form,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  Row,
  Col
} from "reactstrap";
import { memberAction } from "../../redux/actions";
const axios = require("axios");
const Img = require('react-image')


class AddMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      isError: false,
      isSuccess: false,
      fileUploadError: false,
      modal1: false,
      firstFocus: false,
      lastFocus: false,
      isUpdate: false,
      file: require("assets/img/nobody.jpg"),
      profile: {
        memberId: null,
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        dob: null,
        profilePic: null,
      },
      response: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadProfile = this.uploadProfile.bind(this);
    this.getFile = this.getFile.bind(this);
  }

  componentDidMount() {
        const{ profile, isUpdate } = this.props;
        if(profile){
            this.setState({
                profile, isUpdate, memberId: profile.memberId
            });
        }
    }

  handleChange(e) {
    this.setState({
      profile: { ...this.state.profile, [e.target.name]: e.target.value }
    });
  }

  uploadImage(callback) {
    const self = this;
    const { profile } = self.state;

    const fileUploadUrl = `${config.API_URL}/fileUpload`;

    let remoteFileUrl = null;
    if (profile && profile.file && profile.file instanceof Blob) {
      let file = profile.file;
      const fileName = file.name;
      const options = {
        maxSizeMB: 1
      };
      imageCompression(file, options)
        .then(function(compressedFile) {
          console.log(
            `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
          ); // smaller than maxSizeMB
          axios
            .post(fileUploadUrl, { name: fileName })
            .then(function(response) {
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
                .then(function(response) {
                  self.setState({
                    profile: {
                      ...self.state.profile,
                      profilePic: remoteFileUrl
                    }
                  });
                  callback();
                })
                .catch(function(error) {
                  self.setState({
                    isError: true
                  });
                  console.log("Image Upload error: ", error);
                });
            })
            .catch(function(error) {
              self.setState({
                fileUploadError: true
              });
            });
        })
        .catch(function(error) {
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
    if (this.state.isUpdate && profile.memberId && profile.memberId !== ""){
      url = `${url}/${profile.memberId}`
      method = "PUT";
    }
    axios({url, method , data: profile})
      .then(function(response) {
        self.setState({
          isAdding: false,
          isError: false,
          isSuccess: true,
          response: response.data
        });
        setTimeout(
          function() {
            this.setState({ isSuccess: false, modal1: false, profile: {} });
            this.props.getAllMembers();
            const {isUpdate, memberId} = this.state;
            if(isUpdate && memberId)
            {
              this.props.getOneMember(memberId);
            }
          }.bind(self),
          1500
        );
      })
      .catch(function(error) {
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

  getFile(){
    const {profile, file} = this.state;
    if (profile.fileUrl && profile.fileUrl !== "" && profile.fileUrl !== {})
    {
      return profile.fileUrl;
    }else if (profile.profilePic && profile.profilePic !== "")
    {
      return profile.profilePic;
    }else
    {
      return file
    }

  }

  render() {
    const { isAdding, isError, isSuccess, response, profile, isUpdate } = this.state;
    return (
      <>
        <div id="javascriptComponents">
          <Row id="modals">
            <Col>
              <Button
                color="info"
                className="btn-round"
                onClick={() => this.setState({ modal1: true })}
              >
                  { isUpdate ? "Update User" : "Add a new Member"}
              </Button>
              <Modal
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
                    onClick={() => this.setState({ modal1: false,
                      isSuccess: false,

                    })}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">{isUpdate ? "Update the user" : "Add a New Member"}</h4>
                </div>
                <ModalBody>
                  <Form action="" className="form" method="">
                    <Row>
                      <Col>
                        <div className="profile-photo-container">
                          <Img alt="img" src={
                            this.getFile()
                            //   this.state.file
                          } />
                        </div>
                        <InputGroup className="content-center">
                          <label htmlFor="file">Select Image</label>
                          <Input
                            name="file"
                            style={{ display: "none" }}
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
                    </Row>
                    <Row>
                      <Col md="6">
                        <InputGroup>
                          {" "}
                          <Input
                              value={profile.firstName || ""}
                              name="firstName"
                            placeholder="First Name..."
                            type="text"
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <InputGroup>
                          <Input
                              value={profile.lastName || ""}
                              name="lastName"
                            placeholder="Last Name..."
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
                              value={profile.email || ""}
                              name="email"
                            placeholder="Email..."
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
                              value={profile.phone || ""}
                              name="phone"
                            placeholder="Phone NUmber"
                            type="number"
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
                              value={profile.dob || ""}
                              name="dob"
                            placeholder="Date of Birth"
                            type="date"
                            onChange={this.handleChange}
                          />
                        </InputGroup>
                      </Col>
                    </Row>
                    <div>
                      {isAdding && <LinearLoading />}
                      {isSuccess && (
                          <ErrorBar
                              type="success"
                              message={isUpdate ? `User Updated. Member: ${profile.memberId}` : `New User Added. Member: ${response.memberId}`}
                          />
                      )}
                      {isError && <ErrorBar message={response && response.errorMessage ? response.errorMessage : "Something went wrong. Please try again."} />}
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
