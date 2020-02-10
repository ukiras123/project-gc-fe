import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader.js";
import DarkFooter from "../../components/Footers/DarkFooter.js";
import LinearLoading from "./LinearLoading";
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardBody from "reactstrap/es/CardBody";
import TabContent from "reactstrap/es/TabContent";
import TabPane from "reactstrap/es/TabPane";


function getSonElement(sonDetail) {
    const elements = [];
    for (let i = 0; i < 5; i++) {
        if (sonDetail[`son${i}`] && sonDetail[`son${i}`].name) {
            elements.push(
                <h5>
                    <strong>Son's Name: </strong> {sonDetail[`son${i}`].name}
                </h5>
            );
        }
        if (sonDetail[`son${i}`] && sonDetail[`son${i}`].dob) {
            elements.push(
                <h5>
                    <strong>Son's DOB: </strong> {sonDetail[`son${i}`].dob}
                </h5>
            );
        }
        if (sonDetail[`son${i}`] && sonDetail[`son${i}`].wifeName) {
            elements.push(
                <h5>
                    <strong>Daughter in Law's Name: </strong> {sonDetail[`son${i}`].wifeName}
                </h5>
            );
        }
        if (sonDetail[`son${i}`] && sonDetail[`son${i}`].wifeDob) {
            elements.push(
                <h5>
                    <strong>Daughter in Law's DOB: </strong> {sonDetail[`son${i}`].wifeDob}
                </h5>
            );
        }
        if (sonDetail[`son${i}`] && sonDetail[`son${i}`].name) {
            elements.push(<hr></hr>);
        }
    }
    return elements;
}

function getDaughterElement(daughterDetail) {
    const elements = [];
    for (let i = 0; i < 5; i++) {
        if (daughterDetail[`daughter${i}`] && daughterDetail[`daughter${i}`].name) {
            elements.push(
                <h5>
                    <strong>Daughter's Name: </strong> {daughterDetail[`daughter${i}`].name}
                </h5>
            );
        }
        if (daughterDetail[`daughter${i}`] && daughterDetail[`daughter${i}`].dob) {
            elements.push(
                <h5>
                    <strong>Daughter's DOB: </strong> {daughterDetail[`daughter${i}`].dob}
                </h5>
            );
        }
        if (daughterDetail[`daughter${i}`] && daughterDetail[`daughter${i}`].husbandName) {
            elements.push(
                <h5>
                    <strong>Son in Law's Name: </strong> {daughterDetail[`daughter${i}`].husbandName}
                </h5>
            );
        }
        if (daughterDetail[`daughter${i}`] && daughterDetail[`daughter${i}`].husbandDob) {
            elements.push(
                <h5>
                    <strong>Son in Law's DOB: </strong> {daughterDetail[`daughter${i}`].husbandDob}
                </h5>
            );
        }
        if (daughterDetail[`daughter${i}`] && daughterDetail[`daughter${i}`].name) {
            elements.push(<hr></hr>);
        }
    }
    return elements;
}


function ProfilePage(props) {
    const {profile} = props;

    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <>
            <IndexNavbar/>
            <div className="wrapper">
                <ProfilePageHeader profile={profile}/>
                {profile ? (

                    <div className="section" style={{background: "#EEEEEE"}}>
                        <Container>
                            <Row>
                                <Col md="6">
                                    <Card raised style={{marginTop: '20px'}}>
                                        <CardHeader style={{backgroundColor: "#00AA9E"}} title={"Personal Information"}>
                                        </CardHeader>
                                        <CardBody>
                                            <h5>
                                                <strong>Name: </strong> {profile.name || "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Date of Birth: </strong> {profile.dob || "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Mobile: </strong> {profile.phone && profile.phone.mobile ? profile.phone.mobile : "N/A"}&nbsp;&nbsp;&nbsp;&nbsp;
                                                <strong>Telephone: </strong> {profile.phone && profile.phone.telephone ? profile.phone.telephone : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Permanent
                                                    Address: </strong> {profile.address && profile.address.permanentAddress ? profile.address.permanentAddress : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Temporary
                                                    Address: </strong> {profile.address && profile.address.temporaryAddress ? profile.address.temporaryAddress : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Occupation: </strong> {profile.occupation ? profile.occupation : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Marital
                                                    Status: </strong> {profile.maritalStatus ? profile.maritalStatus : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Membership
                                                    Type: </strong> {profile.typeOfMembership ? profile.typeOfMembership : "N/A"}
                                            </h5>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card raised style={{marginTop: '20px'}}>
                                        <CardHeader style={{backgroundColor: "#00AA9E"}} title={"Family's History"}>
                                        </CardHeader>
                                        <CardBody>
                                            <h5>
                                                <strong>Father's
                                                    Name: </strong> {profile.familyHistory && profile.familyHistory.fatherName ? profile.familyHistory.fatherName : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Father's Date of
                                                    Birth: </strong> {profile.familyHistory && profile.familyHistory.fatherDOB ? profile.familyHistory.fatherDOB : "N/A"}
                                            </h5>
                                            <hr></hr>
                                            <h5>
                                                <strong>Mother's
                                                    Name: </strong> {profile.familyHistory && profile.familyHistory.motherName ? profile.familyHistory.motherName : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>Mother's Date of
                                                    Birth: </strong>{profile.familyHistory && profile.familyHistory.motherDOB ? profile.familyHistory.motherDOB : "N/A"}
                                            </h5>
                                            <hr></hr>
                                            <h5>
                                                <strong>GrandFather's
                                                    Name: </strong> {profile.familyHistory && profile.familyHistory.grandFatherName ? profile.familyHistory.grandFatherName : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>GrandFather's Date of
                                                    Birth: </strong> {profile.familyHistory && profile.familyHistory.grandFatherDOB ? profile.familyHistory.grandFatherDOB : "N/A"}
                                            </h5>
                                            <hr></hr>
                                            <h5>
                                                <strong>GrandMother's
                                                    Name: </strong> {profile.familyHistory && profile.familyHistory.grandMotherName ? profile.familyHistory.grandMotherName : "N/A"}
                                            </h5>
                                            <h5>
                                                <strong>GrandMother's Date of
                                                    Birth: </strong> {profile.familyHistory && profile.familyHistory.grandMotherDOB ? profile.familyHistory.grandMotherDOB : "N/A"}
                                            </h5>
                                        </CardBody>
                                    </Card>
                                </Col>
                                {profile.maritalStatus && profile.maritalStatus == 'Married' &&

                                <Col md="6">
                                    <Card raised style={{marginTop: '20px'}}>
                                        <CardHeader style={{backgroundColor: "#00AA9E"}}
                                                    title={"Partner's Information"}>
                                        </CardHeader>
                                        <CardBody>
                                            {profile.maritalStatus && profile.maritalStatus == 'Married' &&
                                            <div>
                                                <h5>
                                                    <strong>Partner's
                                                        Name: </strong> {profile.partnerDetail && profile.partnerDetail.name ? profile.partnerDetail.name : "N/A"}
                                                </h5>

                                                <h5>
                                                    <strong>Partner's
                                                        DOB: </strong> {profile.partnerDetail && profile.partnerDetail.dob ? profile.partnerDetail.dob : "N/A"}
                                                </h5>
                                                <h5>
                                                    <strong>Partner's
                                                        Phone: </strong> {profile.partnerDetail && profile.partnerDetail.phone ? profile.partnerDetail.phone : "N/A"}
                                                </h5>
                                                <hr></hr>
                                                {profile.kidsCount &&
                                                <div>
                                                    <h5>
                                                        <strong>Son: </strong> {profile.kidsCount.sonCount || "N/A"}
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <strong>Daughter: </strong> {profile.kidsCount.daughterCount || "N/A"}
                                                    </h5>
                                                </div>
                                                }
                                            </div>
                                            }
                                        </CardBody>
                                    </Card>
                                </Col>
                                }
                                {profile.maritalStatus && profile.maritalStatus == 'Married' &&

                                <Col md="6">
                                    <Card raised style={{marginTop: '20px'}}>
                                        <CardHeader style={{backgroundColor: "#00AA9E"}}
                                                    title={"Children's Information"}>
                                        </CardHeader>
                                        <CardBody>
                                            {profile.maritalStatus && profile.maritalStatus == 'Married' &&
                                            <div>
                                                {profile.kidsCount && profile.kidsCount.sonCount && (profile.kidsCount.sonCount != '0') &&
                                                <div>
                                                    {getSonElement(profile.kidsDetail.sonDetail)}
                                                </div>

                                                }
                                                {profile.kidsCount && profile.kidsCount.daughterCount && (profile.kidsCount.daughterCount != '0') &&
                                                <div>
                                                    {getDaughterElement(profile.kidsDetail.daughterDetail)}
                                                </div>

                                                }
                                            </div>
                                            }
                                        </CardBody>
                                    </Card>
                                </Col>
                                }


                            </Row>
                        </Container>
                    </div>
                ) : (
                    <LinearLoading/>
                )}
                <DarkFooter/>
            </div>
        </>
    );
}

export default ProfilePage;
