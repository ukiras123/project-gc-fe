import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import MaterialDatatable from "material-datatable";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ErrorBar from "./index-sections/ErrorBar";
import AddMember from "./index-sections/AddMemberModal.js";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { memberAction } from "../redux/actions";

// core components
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";
import LinearLoading from "./index-sections/LinearLoading";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";

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
      name: "प्रोफाइल",
      options: {
        width: 110,
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <a href={`/members/${value.memberId}`}>
              <AccountCircleRoundedIcon />
            </a>
          );
        }
      }
    },
    {
      name: "सदस्य आईडी",
      field: "memberId"
    },
    {
      name: "नाम",
      field: "name"
    },
    {
      name: "जन्म मिति",
      field: "dob"
    },
    {
      name: "फोन",
      options: {
        width: 110,
        filter: false,
        sort: false,
        customBodyRender: (value) => value.phone.mobile
      }
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
        <IndexNavbar />
        <div className="wrapper">
          <LandingPageHeader />
          {isLoading ? <LinearLoading /> : <></>}
          {isError ? <ErrorBar message={"Something went wrong."} /> : <></>}
          {members ? (
            <div className="section-table">
              <AddMember />
              <MuiThemeProvider theme={theme}>
                <MaterialDatatable
                  title={"सदस्यहरू"}
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
    dispatch(memberAction.getAllMember());
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  MembersPage
);
