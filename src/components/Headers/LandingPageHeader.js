import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/nepal2.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">
              गौतम - चौंलागाईं एकता समाज
            </h1>
            <h4>
              काठमाडौँ, स्था. २०६९
            </h4>
            <div className="text-center">
              <Button
                className="btn-icon btn-round"
                color="info"
                target="_blank"
                href="https://www.facebook.com/Gautam-Chaulagain-Unite-Society-851199771614589"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
