import React from "react";
import { withRouter } from 'react-router-dom';
import LinearLoading from "./LinearLoading";
import ErrorBar from "./ErrorBar";

// react plugins that creates an input with a date picker

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  Row,
  Col
} from "reactstrap";
const axios = require("axios");

// core components

class AddMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdding: false,
      isError: false,
      isSuccess: false,
      fileUploadError: false,
      modal1: false,
      firstFocus: false,
      lastFocus: false,
      file: require("assets/img/nobody.jpg"),
      profile: {},
      response: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadProfile = this.uploadProfile.bind(this);
  }

  handleChange(e) {
    this.setState({
      profile: { ...this.state.profile, [e.target.name]: e.target.value }
    });
  }

  uploadImage(callback) {
    const self = this;
    const { profile } = self.state;
    const fileUploadUrl = `https://i63vogmgv0.execute-api.us-east-1.amazonaws.com/dev/fileUpload`;
    let remoteFileUrl = null;
    if (profile && profile.file) {
      const file = profile.file;
      const fileName = file.name;
      axios
        .post(fileUploadUrl, { name: fileName })
        .then(function(response) {
          const responseBody = response.data;
          const formData = new FormData();
          Object.keys(responseBody.fields).forEach(key => {
            formData.append(key, responseBody.fields[key]);
          });
          formData.append("file", file);
          const uploadURL = responseBody.url;
          remoteFileUrl = responseBody.fileUrl;
          console.log("Uploading the image now");
          axios
            .post(uploadURL, formData)
            .then(function(response) {
              console.log("Image Upload Success", remoteFileUrl);
              self.setState({
                profile: {
                  ...self.state.profile,
                  profilePic: remoteFileUrl
                }
              });
            })
            .catch(function(error) {
              console.log("Image Upload error: ", error);
              throw new Error("File Upload Error");
            });
        })
        .catch(function(error) {
          self.setState({
            fileUploadError: true
          });
          console.log("Error", error);
        });
    }
    callback();
  }

  uploadProfile() {
    const url = `https://i63vogmgv0.execute-api.us-east-1.amazonaws.com/dev/members`;
    const self = this;
    axios
      .post(url, self.state.profile)
      .then(function(response) {
        self.setState({
          isAdding: false,
          isError: false,
          isSuccess: true,
          response: response.data
        });
        setTimeout(
          function() {
            this.setState({ isSuccess: false, modal1: false, profile: {} });
          }.bind(self),
          2000
        );
      })
      .catch(function(error) {
        self.setState({
          isAdding: false,
          isError: true,
          isSuccess: false,
          response: error.response.data
        });
        console.log("Error", error.response.data);
      });
  }
  handleForm(e) {
    e.preventDefault();
    this.setState({
      isAdding: true,
      isError: false,
      isSuccess: false
    });
    this.uploadImage(this.uploadProfile);
  }

  handleFileUpload(event) {
    if (event.target.files[0]) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      });
    }
    this.setState({
      profile: {
        ...this.state.profile,
        [event.target.name]: event.target.files[0]
      }
    });
  }

  render() {
    const { isAdding, isError, isSuccess, response } = this.state;
    return (
      <>
        <div id="javascriptComponents">
          <Row id="modals">
            <Col>
              <Button
                color="info"
                className="btn-round"
                onClick={() => this.setState({ modal1: true })}
              >
                Add a new Member
              </Button>
              <Modal
                isOpen={this.state.modal1}
                toggle={() => this.setState({ modal1: false })}
              >
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => this.setState({ modal1: false })}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Add a New Member</h4>
                </div>
                <ModalBody>
                  <Form action="" className="form" method="">
                    <Row>
                      <Col>
                        <div className="profile-photo-container">
                          <img alt="img" src={this.state.file} />
                        </div>
                        <InputGroup className="content-center">
                          <label htmlFor="file">Select Image</label>
                          <Input
                            name="file"
                            style={{ display: "none" }}
                            id="file"
                            placeholder="Picture"
                            type="file"
                            accept="image/x-png,image/gif,image/jpeg"
                            onChange={this.handleFileUpload}
                          ></Input>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputGroup>
                          {" "}
                          <Input
                            name="memberId"
                            placeholder="Member Id..."
                            type="number"
                            onChange={this.handleChange}
                          ></Input>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <InputGroup>
                          {" "}
                          <Input
                            name="firstName"
                            placeholder="First Name..."
                            type="text"
                            onChange={this.handleChange}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <InputGroup>
                          <Input
                            name="lastName"
                            placeholder="Last Name..."
                            type="text"
                            onChange={this.handleChange}
                          ></Input>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputGroup>
                          {" "}
                          <Input
                            name="email"
                            placeholder="Email..."
                            type="text"
                            onChange={this.handleChange}
                          ></Input>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputGroup>
                          {" "}
                          <Input
                            name="phone"
                            placeholder="Phone NUmber"
                            type="number"
                            onChange={this.handleChange}
                          ></Input>
                        </InputGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <InputGroup>
                          {" "}
                          <Input
                            name="dob"
                            placeholder="Date of Birth"
                            type="date"
                            onChange={this.handleChange}
                          ></Input>
                        </InputGroup>
                      </Col>
                    </Row>

                    <Row className="content-center">
                      <Col>
                        <Button
                          color="danger"
                          type="button"
                          onClick={this.handleForm}
                        >
                          Add
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </ModalBody>
                <div>
                  {isAdding && <LinearLoading />}
                  {isSuccess && (
                    <ErrorBar
                      type="success"
                      message={`New User Added. Member: ${response.memberId}`}
                    />
                  )}
                  {isError && <ErrorBar message={response.errorMessage} />}
                </div>
              </Modal>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default withRouter(AddMember);