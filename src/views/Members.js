import React from "react";
import MaterialDatatable from "material-datatable";
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";

// reactstrap components

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

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
                  <a href={`/members/${value.memberId}`}>
                    {value.memberId}
                  </a>
            </div>
          );
        }
      }
    },
    {
      name: "FirstName",
      field: "firstName"
    },
    {
      name: "LastName",
      field: "lastName"
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
const data = [
  {
    "memberId": 1,
    "email": "ukiras@gmail.com",
    "firstName" : "Kiran",
    "lastName": "Gautam",
    "phone": "9849308132",
    "dob": "1990/10/11",
    "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
},
{
  "memberId": 1,
  "email": "ukiras@gmail.com",
  "firstName" : "Kiran",
  "lastName": "Gautam",
  "phone": "9849308132",
  "dob": "1990/10/11",
  "profilePic": "https://s3.amazonaws.com/gautam-chaulagain-asset/member-profile/rnko1k4smr1pl_kiran.jpg"
}
];

const options = {
  selectableRows: false,
  responsive: "scroll",
  rowsPerPage: 25,
  rowsPerPageOptions: [25, 50, 100, 200, 500],
  rowCursorHand: true,
  filter: false
};

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section-table">
          <MuiThemeProvider theme={theme}>
            <MaterialDatatable
              title={"Members"}
              data={data}
              columns={getColumnConfig()}
              options={options}
            />
          </MuiThemeProvider>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
