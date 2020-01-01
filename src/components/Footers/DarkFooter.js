/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer footer-default">
      <Container>
        <div className="copyright" id="copyright">
          © 2019,{" "}
          <a href="https://www.linkedin.com/in/kiran-gautam/" target="_blank">
            Kiran Gautam
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
