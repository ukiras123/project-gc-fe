import React from "react";
import { Container } from "reactstrap";
import AddMember from "../../views/index-sections/AddMemberModal";

const Img = require("react-image");

// reactstrap components

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
        />
        <Container>
          <div className="photo-container">
            <Img
              alt="..."
              src={
                profile && profile.profilePic
                  ? profile.profilePic
                  : require("assets/img/nobody.jpg")
              }
            />
          </div>
          <h3 className="title">
            {profile && profile.firstName && profile.lastName
              ? `${profile.firstName || ""} ${profile.lastName || ""}`
              : ""}
          </h3>
          <p className="category">
            {profile && profile.memberId
              ? `Member Id: ${profile.memberId}`
              : ""}
          </p>
          <AddMember profile={profile} isUpdate={true} />
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
