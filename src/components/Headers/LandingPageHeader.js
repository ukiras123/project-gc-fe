import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
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
              Gautam-Chaulagain 
                <br></br>
              Unity Society
            </h1>
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
