import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Carousel from "./index-sections/Carousel";


function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-team text-center">
          <Container>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/avatar.jpg")}
                    ></img>
                    <h4 className="title">Romina Hadid</h4>
                    <p className="category text-info">Model</p>
                    <p className="description">
                      This is more about me.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/ryan.jpg")}
                    ></img>
                    <h4 className="title">Ryan Tompson</h4>
                    <p className="category text-info">Designer</p>
                    <p className="description">
                      This is more about me.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/eva.jpg")}
                    ></img>
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Fashion</p>
                    <p className="description">
                      This is more about me.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
              <Col md="12">
              <div className="text-center">
                  <Button
                className="btn-round mr-1"
                color="info"
                href="/members"
                size="lg"
              >
                View all members
              </Button>
              </div>
              </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="separator separator-primary"></div>
        <Carousel />
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
