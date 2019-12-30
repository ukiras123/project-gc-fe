import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader(props) {
  let pageHeader = React.createRef();
  const { profile } = props;
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/nepal2.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img
              alt="..."
              src={
                profile && profile.profilePic
                  ? profile.profilePic
                  : require("assets/img/nobody.jpg")
              }
            ></img>
          </div>
          <h3 className="title">
            {profile && profile.firstName && profile.lstName
              ? `${profile.firstName || ""} ${profile.lastName || ""}`
              : ""}
          </h3>
          <p className="category">
            {profile && profile.memberId
              ? `Member Id: ${profile.memberId}`
              : ""}
          </p>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
