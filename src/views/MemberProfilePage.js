import React from "react";

import ProfilePage from "./index-sections/ProfilePage";
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";
import Error from "./index-sections/ErrorBar";
import LinearLoading from "./index-sections/LinearLoading";
import { Button, Container } from "reactstrap";
import { memberAction } from "../redux/actions";
import { compose } from "redux";
import { connect } from "react-redux";

class MemberProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: {},
      isLoading: true,
      isError: false,
      errorMessage: "",
      memberId: ""
    };
  }

  componentDidMount() {
    const { memberId } = this.props.match.params;
    this.props.getOneMember(memberId);
  }

  getProfile(profile) {
    return (
      <div>
        <ProfilePage profile={profile} />
      </div>
    );
  }

  getError(memberId) {
    return (
      <div>
        <LandingPageHeader />
        <Error
          errorMessage={`User not found. ${
            memberId ? "MemberId: " + memberId : memberId
          }`}
        />
        <Container>
          <div className="text-center">
            <Button className="btn-round mr-1" color="info" href="/" size="lg">
              Home
            </Button>
            <Button
              className="btn-round mr-1"
              color="info"
              href="/members"
              size="lg"
            >
              View all members
            </Button>
          </div>
        </Container>
        <DarkFooter />
      </div>
    );
  }

  render() {
    const { member, isLoading, isError, memberId } = this.props;
    if (isLoading) {
      return (
        <div>
          <LinearLoading />
        </div>
      );
    }
    if (isError) {
      return <div>{this.getError(memberId)}</div>;
    }
    if (member) {
      return <div>{this.getProfile(member)}</div>;
    }
  }
}

const mapStateToProps = state => ({
  member: state.member.member,
  isError: state.member.getOneError,
  isLoading: state.member.getOneProgress,
  memberId: state.member.memberId
});

const mapDispatchToProps = dispatch => ({
  getOneMember: id => {
    dispatch(memberAction.getOneMember(id));
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  MemberProfile
);
