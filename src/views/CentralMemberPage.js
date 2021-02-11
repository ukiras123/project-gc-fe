import React from "react";

import { Button, Container, Row, Col } from "reactstrap";
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import DarkFooter from "../components/Footers/DarkFooter.js";
import Carousel from "./index-sections/Carousel";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
const Img = require("react-image");

const colStyleCenter = {
  float: 'none',
  margin: '0 auto'
};

const coreMembers = [
  {
    img: require("assets/img/members/core/1.png"),
    name: 'श्री पुण्य प्र. गौतम',
    post: 'अध्यक्ष'
  },
  {
    img: require("assets/img/members/core/2.png"),
    name: 'श्री ठाकुर प्र. गौतम',
    post: 'उपाध्यक्ष'
  },
  {
    img: require("assets/img/members/core/3.png"),
    name: 'श्रीमती पुण्यवती चौंलागाई',
    post: 'उपाध्यक्ष'
  },
  {
    img: require("assets/img/members/core/4.png"),
    name: 'श्री सुवोध प्र. चौंलागाई',
    post: 'महासचिव'
  },
  {
    img: require("assets/img/members/core/5.png"),
    name: 'श्री अर्जुन प्र. चौंलागाई',
    post: 'सचिव'
  },
  {
    img: require("assets/img/members/core/6.png"),
    name: 'श्री मिन प्र. गौतम',
    post: 'कोषाध्यक्ष'
  },
  {
    img: require("assets/img/members/core/7.png"),
    name: 'श्री योगेन्द्र चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core/8.png"),
    name: 'श्री विक्रम गौतम',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core/9.png"),
    name: 'श्री कृष्ण प्र. चौंलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core/10.png"),
    name: 'श्री धर्मराज चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core/11.png"),
    name: 'श्री सुनिता गौतम (पन्त)',
    post: 'सदस्य'
  }
];

const initialMembers = [
  {
    img: require("assets/img/members/initial/1.png"),
    name: 'श्री डम्बरप्रसाद चौलागाई',
    post: 'अध्यक्ष'
  },
  {
    img: require("assets/img/members/initial/2.png"),
    name: 'श्री मनप्रसाद गौतम',
    post: 'उपाध्यक्ष'
  },
  {
    img: require("assets/img/members/initial/3.png"),
    name: 'श्री वासुदेव गौतम',
    post: 'महासचिव'
  },
  {
    img: require("assets/img/members/initial/4.png"),
    name: 'श्री हेमलाल गौतम',
    post: 'सचिव'
  },
  {
    img: require("assets/img/members/initial/5.png"),
    name: 'श्री राजेन्द्र प्रसाद चौलागाईं',
    post: 'कोषाध्यक्ष'
  },
  {
    img: require("assets/img/members/initial/6.png"),
    name: 'श्री पुण्यप्रसाद गौतम',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/7.png"),
    name: 'श्री राजन चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/8.png"),
    name: 'श्री तिर्थराज चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/9.png"),
    name: 'श्री माधवराज चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/10.png"),
    name: 'श्री कृष्णप्रसाद चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/11.png"),
    name: 'श्री चन्द्रप्रसाद चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/12.png"),
    name: 'श्री भूपेन्द्र चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/13.png"),
    name: 'श्री अर्जुनप्रसाद चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/14.png"),
    name: 'श्री सुर्य प्रसाद चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/15.png"),
    name: 'श्री केशवराज गौतम',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/16.png"),
    name: 'श्री ज्ञान प्रसाद चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/initial/17.png"),
    name: 'श्री ठाकुरप्रसाद गौतम',
    post: 'सदस्य'
  }
];


const midMembers = [
  {
    img: require("assets/img/members/core2/1.png"),
    name: 'श्री डम्बरप्रसाद चौलागाई',
    post: 'अध्यक्ष'
  },
  {
    img: require("assets/img/members/core2/2.png"),
    name: 'श्री पुण्यप्रसाद गौतम',
    post: 'उपाध्यक्ष'
  },
  {
    img: require("assets/img/members/core2/3.png"),
    name: 'श्री नेत्रप्रसाद गौतम',
    post: 'उपाध्यक्ष'
  },
  {
    img: require("assets/img/members/core2/4.png"),
    name: 'श्री राजेन्द्रप्रसाद चौलागाई',
    post: 'कोषाध्यक्ष'
  },
  {
    img: require("assets/img/members/core2/5.png"),
    name: 'श्री सुवोधप्रसाद चौलागाई',
    post: 'महासचिव'
  },
  {
    img: require("assets/img/members/core2/6.png"),
    name: 'श्री राजन चौलागाई',
    post: 'सचिव'
  },
  {
    img: require("assets/img/members/core2/7.png"),
    name: 'श्रीमती पुण्यवति चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core2/8.png"),
    name: 'श्रीमती लक्ष्मी गौतम',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core2/9.png"),
    name: 'श्री ठाकुरप्रसाद गौतम',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core2/10.png"),
    name: 'श्री विक्रमराज गौतम',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core2/11.png"),
    name: 'श्री टंकप्रसाद गौतम',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core2/12.png"),
    name: 'श्री विष्णुप्रसाद चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core2/13.png"),
    name: 'श्री उद्धवप्रसाद गौतम',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core2/14.png"),
    name: 'श्री दिपकप्रसाद चौलागाई',
    post: 'सदस्य'
  },
  {
    img: require("assets/img/members/core2/15.png"),
    name: 'श्री रेवतीप्रसाद गौतम',
    post: 'सदस्य'
  }
];


function getImages(members){
  return members.map((mem, index) => {
    return <Col md={index == 0 ? "12" : "4"} style={colStyleCenter} key={mem.name}>
      <div className="team-player">
        <Img
            alt="..."
            className="rounded-circle img-fluid img-raised"
            src={mem.img}
        />
        <p style={{marginTop: '5px', marginBottom: '0px'}} className="category text-info">{mem.post}</p>
        <h4 style={{marginTop: '1px', color: '#777672'}} className="title">{mem.name}</h4>
      </div>
    </Col>
  });
}

function CentralMemberPage() {
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
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">केन्द्रीय तदर्थ समिति</h2>
            <div className="team">
              <Row>
                {getImages(initialMembers)}
              </Row>
            </div>

            <hr></hr>
            <h2 className="title">केन्द्रीय समिति</h2>
            <div className="team">
              <Row>
                {getImages(midMembers)}
              </Row>
            </div>
            <hr></hr>
            <h2 className="title">केन्द्रीय समिति-२०७३</h2>
            <div className="team">
              <Row>
                {getImages(coreMembers)}
              </Row>
            </div>
          </Container>
        </div>
        <div className="separator separator-primary"></div>
        {/*<Carousel />*/}
        <DarkFooter />
      </div>
    </>
  );
}

export default CentralMemberPage;
