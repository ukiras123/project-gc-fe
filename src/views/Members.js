import React from "react";
import MaterialDatatable from "material-datatable";
import { Tooltip, Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { OpenInNew } from '@material-ui/icons';

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
        padding: '0 0 0 1000px',
        backgroundColor: "#DD9F78",
      }
    },
    MaterialDatatableBodyCell: {
      root: {
        maxWidth: '240px',
        width: '20px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    }
  }
});

const columns = [
  {   
      name: 'MemberId', 
      field: 'memberId',
  },
  {
      name: 'FirstName', 
      field: 'firstName'
  },
  {
      name: 'LastName', 
      field: 'lastName',
  },
  {
      name: 'Phone', 
      field: 'phone'
  },
  {
      name: 'Date of Birth', 
      field: 'dob'
  },
  {
      name: 'E-mail', 
      field: 'email'
  },
  {
    name: 'Action',
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <div style={{ display: 'flex' }}>
            <Tooltip title="More Details">
              <Button color="primary">
                <OpenInNew />
              </Button>
            </Tooltip>
          </div>
        );
      }
    }
  }
];
const data = [
  {"memberId": 1,"email": "uki2f3s@gmail.com","firstName" : "an","lastName": "Gautam","phone": "9909","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 23,"email": "ukir2f3s@gmail.com","firstName" : "xx","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 432,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 3423,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 23423,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 2,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 342,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"},
  {"memberId": 227833,"email": "ukir4a2f3s@gmail.com","firstName" : "Kiran","lastName": "Gautam","phone": "2323232323","dob": "2039/20/20","profilePic": "23"}

];

const options = {
  selectableRows: false,
  responsive: 'scroll',
  rowsPerPage: 25,
  rowsPerPageOptions: [25, 50, 100, 200, 500],
  rowCursorHand: true,
  filter: false,
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
    columns={columns}
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
