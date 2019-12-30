import React from "react";

import ProfilePage from "./index-sections/ProfilePage";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Error from "./index-sections/ErrorBar";
import LinearLoading from "../views/index-sections/LinearLoading";
import { Button, Container } from "reactstrap";

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
    console.log("Compount did mount");
    const { memberId } = this.props.match.params;
    this.setState({ isLoading: true, memberId: memberId });
    const url = `https://i63vogmgv0.execute-api.us-east-1.amazonaws.com/dev/members/${memberId}`;
    console.log("URL", url);
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(member => {
        this.setState({ member, isLoading: false, isError: false });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          isError: true,
          errorMessage: error.message
        });
        console.log(error);
      });
  }

  getProfile(profile) {
    console.log("Profile", profile);
    return (
      <div>
        <ProfilePage profile={profile} />
      </div>
    );
  }

  getLoading() {
    return (
      <div>
        <LandingPageHeader />
        <ProfilePage isLoading={true} />
        <DarkFooter />
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
    const { member, isLoading, isError, memberId } = this.state;
    console.log("State", this.state);
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

export default MemberProfile;
