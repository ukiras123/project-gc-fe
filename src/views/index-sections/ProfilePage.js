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
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";

function ProfilePage(props) {
  const { profile } = props;

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader profile={profile} />
        {profile ? (
          <div className="section">
            <Container>
              <Row>
                <Col md="6">
                  Name:
                </Col>
                <Col md="6">
                  Kiran
                </Col>
              </Row>
            </Container>
          </div>
        ) : (
          <LinearLoading />
        )}
        <DarkFooter />
      </div>
    </>
  );
}

export default ProfilePage;
