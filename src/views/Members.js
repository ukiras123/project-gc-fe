import React from "react";
import MaterialDatatable from "material-datatable";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ErrorBar from "./index-sections/ErrorBar";
import AddMember from "./index-sections/AddMemberModal.js";

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
      name: "MemberId",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <a href={`/members/${value.memberId}`}>{value.memberId}</a>
            </div>
          );
        }
      }
    },
    {
      name: "Name",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>{`${value.firstName ? value.firstName : ""} ${
              value.lastName ? value.lastName : ""
            }`}</div>
          );
        }
      }
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

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null,
      isLoading: true,
      isError: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const url = `https://i63vogmgv0.execute-api.us-east-1.amazonaws.com/dev/members`;
    console.log("URL", url);
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(members => {
        this.setState({ members, isLoading: false });
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

  render() {
    const { members, isLoading, isError } = this.state;
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <LandingPageHeader />
          {isLoading ? <LinearLoading /> : <></>}
          {isError ? (
            <ErrorBar message={"Something went wrong."} />
          ) : (
            <></>
          )}
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

export default LandingPage;
