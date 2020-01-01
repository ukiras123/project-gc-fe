import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import MaterialDatatable from "material-datatable";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ErrorBar from "./index-sections/ErrorBar";
import AddMember from "./index-sections/AddMemberModal.js";
import { memberConstants } from "../redux/constants";
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

// reactstrap components

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import LinearLoading from "./index-sections/LinearLoading";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MaterialDatatableHeadRow: {
      root: {
        padding: "0 0 0 1000px",
        backgroundColor: "#DD9F78"
      }
    },
    MaterialDatatableBodyCell: {
      root: {
        maxWidth: "240px",
        width: "20px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }
  }
});

function getColumnConfig(props) {
  return [
    {
      name: "Profile",
      options: {
        width: 100,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
              <a href={`/members/${value.memberId}`}><AccountCircleRoundedIcon /></a>
          );
        }
      }
    },
    {
      name: "MemberId",
      field: "memberId",
    },
    {
      name: "First Name",
      field: "firstName",
    },
    {
      name: "Last Name",
      field: "lastName",
    },
    {
      name: "Phone",
      field: "phone"
    },
    {
      name: "Date of Birth",
      field: "dob"
    },
    {
      name: "E-mail",
      field: "email"
    }
  ];
}
const options = {
  selectableRows: false,
  responsive: "scroll",
  rowsPerPage: 25,
  rowsPerPageOptions: [25, 50, 100, 200, 500],
  rowCursorHand: true,
  filter: false
};

class MembersPage extends React.Component {

  componentDidMount() {
    this.props.getAllMembers();
  }

  render() {
    const { members, isLoading, isError } = this.props;
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <LandingPageHeader />
          {isLoading ? <LinearLoading /> : <></>}
          {isError ? <ErrorBar message={"Something went wrong."} /> : <></>}
          {members ? (
            <div className="section-table">
              <AddMember />
              <MuiThemeProvider theme={theme}>
                <MaterialDatatable
                  title={"Members"}
                  data={members}
                  columns={getColumnConfig()}
                  options={options}
                />
              </MuiThemeProvider>
            </div>
          ) : (
            <></>
          )}
          <DarkFooter />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  members: state.member.members,
  isError: state.member.getAllError,
  isLoading: state.member.getAllProgress
});

const mapDispatchToProps = dispatch => ({
  getAllMembers: () => {
    dispatch({ type: memberConstants.MEMBER_GET_ALL });
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  MembersPage
);
