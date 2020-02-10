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
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container fluid>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">गौतम चौंलागाईं समाजको पृष्ठभूमि</h2>
                <p className="description">
                  रामेछाप र काभ्रेको सिमानामा पर्ने चौरी खोलाको आसपासमा
                  बसोवास गर्ने गौतम चौंलागाईंहरुको नातागोताले जेलिएको इष्टमित्रहरुको
                  बिचमा आपसी, सद्भाव, सौहार्दता सस्कृती तथा संस्कार एकता कायम
                  गर्नको निम्ति २०६८ साल चैत्र २६ गते दिव्यश्वरी पार्टी प्यालेस लोकन्थलिमा
                  उपस्थित भएका इष्टमित्रहरुको विचमा एकताको खाचो महशुस गरियो ।
                  यसैको फलस्वरुप २०६५ साल बैशाख गते रामेछाप गुन्सी भदौरेका
                  बुद्धीजिवी भद्रभलादमि हरुको भेलाले श्री डम्बर प्रसाद चौंलागाईं को
                  अध्यक्षतामा, उपाध्यक्ष स्व.मन प्रसाद गौतम, महासचिव डा.बासुदेव गौतम
                  समेत ले पटक पटक व्यापक भेला छलफल गरि एउटा बिधान तयार
                  गरियो। त्यही बिधानका आधारमा यस समाजलाई बैधानिकता दिनका
                  निम्ति २०६४ सालमा काठमाण्डौ सथित जिल्ला प्रशासन कार्यालयमा दर्ता
                  गरि बिधिवत रुपमा विस्तारको अभियान अगाडी बढायो । यो समाज ले
                  रामेछापको गुन्सी भदौरेलाई सीमित नराखी छिमेकी गाविस
                  लखनपुर साथै छिमेकी जिल्ला काभ्रेमा बसोबास गर्ने गौतम चौंलागाईं हरुलाई समेट्ने निर्णय
                  गर्दै काभ्रेको मादन कुडारी, कात्तिके देउराली, चौरी पोखरी, गोठपानी,धुसेनी
                  शिवालय र माझिफेदा लगायतका क्षेत्र हरुलाई समेट्ने काम गरियो ।
                </p>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>

          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">केन्द्रीय समिति-२०७३</h2>
            <div className="team">
              <Row>
                <Col md="4" style={colStyleCenter}>
                  <div className="team-player">
                    <Img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/members/core/1.png")}
                    />
                    <p style={{marginTop: '5px', marginBottom: '0px'}} className="category text-info">अध्यक्ष</p>
                    <h4 style={{marginTop: '1px'}} className="title">श्री पुण्य प्र. गौतम</h4>
                    {/*<p className="description">This is more about me.</p>*/}
                  </div>
                </Col>
                <Col md="4" style={colStyleCenter}>
                  <div className="team-player">
                    <Img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/members/core/2.png")}
                    />
                    <p style={{marginTop: '5px', marginBottom: '0px'}} className="category text-info">उपाध्यक्ष</p>
                    <h4 style={{marginTop: '1px'}} className="title">श्री ठाकुर प्र. गौतम</h4>
                  </div>
                </Col>
                <Col md="4" style={colStyleCenter}>
                  <div className="team-player">
                    <Img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/members/core/3.png")}
                    />
                    <p  style={{marginTop: '5px', marginBottom: '0px'}} className="category text-info">उपाध्यक्ष</p>
                    <h4 style={{marginTop: '1px'}} className="title">श्रीमती पुण्यवती चौंलागाई</h4>
                  </div>
                </Col>
                <Col md="4" style={colStyleCenter}>
                  <div className="team-player">
                    <Img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/members/core/4.png")}
                    />
                    <p  style={{marginTop: '5px', marginBottom: '0px'}}className="category text-info">महासचिव</p>
                    <h4 style={{marginTop: '1px'}} className="title">श्री सुवोध प्र. चौंलागाई</h4>
                  </div>
                </Col>
                <Col md="4" style={colStyleCenter}>
                  <div className="team-player">
                    <Img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/members/core/5.png")}
                    />
                    <p style={{marginTop: '5px', marginBottom: '0px'}} className="category text-info">सचिव</p>
                    <h4 style={{marginTop: '1px'}} className="title">श्री अर्जुन प्र. चौंलागाई</h4>
                  </div>
                </Col>
                <Col md="4" style={colStyleCenter}>
                  <div className="team-player">
                    <Img
                        alt="..."
                        className="rounded-circle img-fluid img-raised"
                        src={require("assets/img/members/core/6.png")}
                    />
                    <p style={{marginTop: '5px', marginBottom: '0px'}} className="category text-info">कोषाध्यक्ष</p>
                    <h4 style={{marginTop: '1px'}} className="title">श्री मिन प्र. गौतम</h4>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <div className="text-center">
                    <Button
                      className="btn-round mr-1"
                      color="info"
                      href="/members"
                      size="lg"
                    >
                      View all members
                    </Button>
                  </div>
                </Col>
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

export default LandingPage;
