import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import LinearLoading from "./LinearLoading";

function ProfilePage(props) {
  console.log("Profile Page Props", JSON.stringify(props.profile));
  const { profile } = props;

  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      {" "}
      <div className="wrapper">
        <ProfilePageHeader profile={profile} />
        {profile ? (
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <h4 className="title text-center">My Portfolio</h4>
                  <div className="nav-align-center">
                    <Nav
                      className="nav-pills-info nav-pills-just-icons"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={pills === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setPills("1");
                          }}
                        >
                          <i className="now-ui-icons design_image"></i>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={pills === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setPills("2");
                          }}
                        >
                          <i className="now-ui-icons location_world"></i>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={pills === "3" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setPills("3");
                          }}
                        >
                          <i className="now-ui-icons sport_user-run"></i>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Col>
                <TabContent className="gallery" activeTab={"pills" + pills}>
                  <TabPane tabId="pills1">
                    <Col className="ml-auto mr-auto" md="10">
                      <Row className="collections">
                        <Col md="6">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg1.jpg")}
                          ></img>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg3.jpg")}
                          ></img>
                        </Col>
                        <Col md="6">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg8.jpg")}
                          ></img>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg7.jpg")}
                          ></img>
                        </Col>
                      </Row>
                    </Col>
                  </TabPane>
                  <TabPane tabId="pills2">
                    <Col className="ml-auto mr-auto" md="10">
                      <Row className="collections">
                        <Col md="6">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg6.jpg")}
                          ></img>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg11.jpg")}
                          ></img>
                        </Col>
                        <Col md="6">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg7.jpg")}
                          ></img>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg8.jpg")}
                          ></img>
                        </Col>
                      </Row>
                    </Col>
                  </TabPane>
                  <TabPane tabId="pills3">
                    <Col className="ml-auto mr-auto" md="10">
                      <Row className="collections">
                        <Col md="6">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg3.jpg")}
                          ></img>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg8.jpg")}
                          ></img>
                        </Col>
                        <Col md="6">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg7.jpg")}
                          ></img>
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/bg6.jpg")}
                          ></img>
                        </Col>
                      </Row>
                    </Col>
                  </TabPane>
                </TabContent>
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
