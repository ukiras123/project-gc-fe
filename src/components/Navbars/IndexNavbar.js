import React from "react";

// reactstrap components
import { NavbarBrand, Navbar, Container } from "reactstrap";
import Button from "@material-ui/core/Button";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/" id="navbar-brand">
              <Button style={{fontSize : '15px'}} type="button" class="btn btn-info">होम</Button>
            </NavbarBrand>
            <NavbarBrand href="/members" id="navbar-brand">
              <Button style={{fontSize : '15px'}} type="button" class="btn btn-info">सदस्यहरु</Button>
            </NavbarBrand>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
