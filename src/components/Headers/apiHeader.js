/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Modal,
  FormGroup,
  Input,
  FormModal
} from "reactstrap";

class CardsHeader extends React.Component {
  state = {
    defaultModal: false,
    notificationModal: false,
    formModal: false,
    alert: null
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  render() {
    return (
      <>
        <div className="header bg-primary pb-6">
          <Container fluid>
            <div className="header-body">
              <Row className="align-items-center py-4">
                <Col lg="6" xs="7">
                  {/* <h6 className="h2 text-white d-inline-block mb-0">
                    {this.props.name}
                  </h6>{" "} */}

                  <Breadcrumb
                    className="d-none d-md-inline-block"
                    listClassName="breadcrumb-links breadcrumb-dark"
                  >
                    <BreadcrumbItem>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fas fa-home" />
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        {this.props.parentName}
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem aria-current="page" className="active">
                      {this.props.name}
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Col className="text-right" lg="6" xs="5">
                  <Button
                    className="btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={() => this.toggleModal("formModal")}
                    size="sm"
                  >
                    Generate Token
                  </Button>
                  <Modal
                    size="lg"
                    className="modal-dialog-centered"
                    isOpen={this.state.formModal}
                    toggle={() => this.toggleModal("formModal")}
                  >
                    <div className="modal-header">
                      <h6 className="modal-title" id="modal-title-default">
                        Generate New Token
                      </h6>
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.toggleModal("formModal")}
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <Row>
                        <Col md="1"></Col>
                        <Col md="2">
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Username
                          </label>
                        </Col>
                        <Col md="7">
                          <FormGroup>
                            <Input
                              id="example4cols1Input"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="1"></Col>
                        <Col md="2">
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Password
                          </label>
                        </Col>
                        <Col md="7">
                          <FormGroup>
                            <Input
                              placeholder="Password"
                              type="password"
                              onFocus={() =>
                                this.setState({ focusedPassword: true })
                              }
                              onBlur={() =>
                                this.setState({ focusedPassword: false })
                              }
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="1"></Col>
                        <Col md="2">
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Client
                          </label>
                        </Col>
                        <Col md="7">
                          <Row>
                            <Col md="4">
                              <FormGroup>
                                <div className="custom-control custom-radio mb-3">
                                  <input
                                    className="custom-control-input"
                                    id="customRadio5"
                                    name="radio"
                                    type="radio"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio5"
                                  >
                                    IP Address
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                            <Col md="8">
                              <FormGroup>
                                <Input
                                  id="example4cols1Input"
                                  placeholder="IP Address"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="4">
                              <FormGroup>
                                <div className="custom-control custom-radio mb-3">
                                  <input
                                    className="custom-control-input"
                                    id="customRadio6"
                                    name="radio"
                                    type="radio"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio6"
                                  >
                                    Webapp URL
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                            <Col md="8">
                              <FormGroup>
                                <Input
                                  id="example4cols1Input"
                                  placeholder="URL"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12">
                              <FormGroup>
                                <div className="custom-control custom-radio mb-3">
                                  <input
                                    className="custom-control-input"
                                    id="customRadio7"
                                    name="radio"
                                    type="radio"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customRadio7"
                                  >
                                    IP Address Of This request's login
                                  </label>
                                </div>
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="1"></Col>
                        <Col md="2">
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Expiration
                          </label>
                        </Col>
                        <Col md="7">
                          <FormGroup>
                            <Input id="exampleFormControlSelect1" type="select">
                              <option>1 Hour</option>
                              <option>2 Hours</option>
                              <option>3 Hours</option>
                              <option>4 Hours</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="1"></Col>
                        <Col md="2">
                          <label
                            className="form-control-label"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Format
                          </label>
                        </Col>
                        <Col md="7">
                          <FormGroup>
                            <Input id="exampleFormControlSelect1" type="select">
                              <option>HTML</option>
                              <option>XML</option>
                              <option>JSON</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="modal-footer">
                      <Button
                        className="ml-auto"
                        color="info"
                        type="button"
                        onClick={() => this.toggleModal("formModal")}
                      >
                        Save
                      </Button>
                    </div>
                  </Modal>
                  {/* <Button
                    className="btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    Filters
                  </Button> */}
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

CardsHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string
};

export default CardsHeader;
