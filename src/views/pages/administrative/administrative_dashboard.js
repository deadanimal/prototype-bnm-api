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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react component used to create sweet alerts
import ReactBSAlert from "react-bootstrap-sweetalert";
// import InputMask from "react-input-mask";
import MaskedFormControl from "react-bootstrap-maskedinput";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Form,
  Input,
  ListGroupItem,
  ListGroup,
  Media,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledAlert,
  Label,
  FormGroup,
  UncontrolledTooltip,
  Modal,
  CardFooter,
  Pagination,
  PaginationProps,
  PaginationItem,
  PaginationItemProps,
  PaginationLinkProps,
  PaginationLink,
  CardTitle,
} from "reactstrap";

// core components

import SimpleHeader from "components/Headers/adminDashboardHeader.js";
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chartExample6,
  chartExample7,
  chartGis,
  chartAdminDash,
} from "variables/charts.js";
import Barchart1 from "variables/Barchart1";
import Barchart2 from "variables/Barchart2";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }

  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1",
    });
  };
  state = {
    defaultModal: false,
    notificationModal: false,
    formModal: false,
    alert: null,
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  infoAlert = () => {
    this.setState({
      alert: (
        <ReactBSAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Success"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnBsStyle="success"
          confirmBtnText="Ok"
          btnSize=""
        >
          Successfully adding New data.
        </ReactBSAlert>
      ),
    });
  };
  hideAlert = () => {
    this.setState({
      alert: null,
    });
  };

  render() {
    let wwww = 1;
    // console.log(wwww);

    return (
      <>
        {this.state.alert}
        <div className="rna-wrapper">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <SimpleHeader parentName="Administrative" name="Dashboard" />
        <Container className="mt--6" fluid>
          <Row>
            <Col md="7">
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader className="bg-transparent">
                      API Consumed By User Monthly
                    </CardHeader>
                    <Barchart1 />
                    {/* <CardBody>
                      <div className="chart">
                        <Bar
                          data={chartAdminDash.data}
                          options={chartAdminDash.options}
                          className="chart-canvas"
                          id="chart-doughnut"
                        />
                      </div>
                    </CardBody> */}
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xl="6">
                  <Card>
                    <CardHeader>New User Registered</CardHeader>
                    <CardBody>
                      <ListGroup className="list my--3" flush>
                        <ListGroupItem className="px-0">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <a
                                className="avatar rounded-circle"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/theme/profile.jpg")}
                                />
                              </a>
                            </Col>
                            <div className="col ml--2">
                              <h4 className="mb-0">
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  John Michael
                                </a>
                              </h4>
                              <span className="text-success">●</span>{" "}
                              <small>Developer</small>
                            </div>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem className="px-0">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <a
                                className="avatar rounded-circle"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/theme/profile.jpg")}
                                />
                              </a>
                            </Col>
                            <div className="col ml--2">
                              <h4 className="mb-0">
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Alex Smith
                                </a>
                              </h4>
                              <span className="text-success">●</span>{" "}
                              <small>Developer</small>
                            </div>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem className="px-0">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <a
                                className="avatar rounded-circle"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/theme/profile.jpg")}
                                />
                              </a>
                            </Col>
                            <div className="col ml--2">
                              <h4 className="mb-0">
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Samantha Ivy
                                </a>
                              </h4>
                              <span className="text-danger">●</span>{" "}
                              <small>Admin</small>
                            </div>
                          </Row>
                        </ListGroupItem>
                        <ListGroupItem className="px-0">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <a
                                className="avatar rounded-circle"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/theme/profile.jpg")}
                                />
                              </a>
                            </Col>
                            <div className="col ml--2">
                              <h4 className="mb-0">
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  John Michael
                                </a>
                              </h4>
                              <span className="text-success">●</span>{" "}
                              <small>Developer</small>
                            </div>
                          </Row>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl="6">
                  <Card>
                    <CardHeader>New API Announcement</CardHeader>
                    <CardBody className="p-0">
                      <ListGroup data-toggle="checklist" flush>
                        <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                          <div className="checklist-item checklist-item-success">
                            <div className="checklist-info">
                              <h5 className="checklist-title mb-0">
                                /base-rate/bank-code
                              </h5>
                              <small>Version 1.0.2</small>
                            </div>
                            <div>
                              <div className="custom-control custom-checkbox custom-checkbox-success">
                                <Button
                                  size="sm"
                                  color="primary"
                                  onClick={() =>
                                    this.toggleModal("notificationModal")
                                  }
                                >
                                  View
                                </Button>
                                <Modal
                                  className="modal-dialog-centered"
                                  isOpen={this.state.notificationModal}
                                  toggle={() =>
                                    this.toggleModal("notificationModal")
                                  }
                                >
                                  <div className="modal-header">
                                    <h6
                                      className="modal-title"
                                      id="modal-title-default"
                                    >
                                      View API
                                    </h6>
                                    <button
                                      aria-label="Close"
                                      className="close"
                                      data-dismiss="modal"
                                      type="button"
                                      onClick={() =>
                                        this.toggleModal("notificationModal")
                                      }
                                    >
                                      <span aria-hidden={true}>×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <Col md="12">
                                      <Row>
                                        <Col md="3">
                                          <label
                                            className="form-control-label"
                                            htmlFor="exampleFormControlSelect1"
                                          >
                                            URL
                                          </label>
                                        </Col>
                                        <Col md="9">
                                          {" "}
                                          <FormGroup>
                                            <Input
                                              id="example4cols1Input"
                                              value="/base-rate/bank-code"
                                              type="text"
                                            />
                                          </FormGroup>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col md="12">
                                      <Row>
                                        <Col md="3">
                                          <label
                                            className="form-control-label"
                                            htmlFor="exampleFormControlSelect1"
                                          >
                                            Version
                                          </label>
                                        </Col>
                                        <Col md="9">
                                          <FormGroup>
                                            <Input
                                              value="Version 1.0.2"
                                              type="text"
                                            />
                                          </FormGroup>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </div>
                                  <div className="modal-footer">
                                    <Button
                                      color="primary"
                                      type="button"
                                      onClick={() =>
                                        this.toggleModal("notificationModal")
                                      }
                                    >
                                      Save
                                    </Button>
                                  </div>
                                </Modal>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                          <div className="checklist-item checklist-item-success">
                            <div className="checklist-info">
                              <h5 className="checklist-title mb-0">
                                /base-rate
                              </h5>
                              <small>Version 1.0.2</small>
                            </div>
                            <div>
                              <div className="custom-control custom-checkbox custom-checkbox-success">
                                <Button
                                  size="sm"
                                  color="primary"
                                  onClick={() =>
                                    this.toggleModal("notificationModal")
                                  }
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                          <div className="checklist-item checklist-item-success">
                            <div className="checklist-info">
                              <h5 className="checklist-title mb-0">
                                /fx-turn-over
                              </h5>
                              <small>Version 1.0.3</small>
                            </div>
                            <div>
                              <div className="custom-control custom-checkbox custom-checkbox-success">
                                <Button
                                  size="sm"
                                  color="primary"
                                  onClick={() =>
                                    this.toggleModal("notificationModal")
                                  }
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                        <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                          <div className="checklist-item checklist-item-success">
                            <div className="checklist-info">
                              <h5 className="checklist-title mb-0">
                                /exchange-rate/currency-code
                              </h5>
                              <small>Version 2.0.1</small>
                            </div>
                            <div>
                              <div className="custom-control custom-checkbox custom-checkbox-success">
                                <Button
                                  size="sm"
                                  color="primary"
                                  onClick={() =>
                                    this.toggleModal("notificationModal")
                                  }
                                >
                                  View
                                </Button>
                              </div>
                            </div>
                          </div>
                        </ListGroupItem>
                      </ListGroup>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col xl="5">
              <Col md="12">
                <Card>
                  <CardHeader className="bg-transparent">
                    New User Registered
                  </CardHeader>
                  <Barchart2 />
                  {/* <CardBody>
                    <div className="chart">
                      <Bar
                        data={chartExample2.data}
                        options={chartExample2.options}
                        className="chart-canvas"
                        id="chart-bars"
                      />
                    </div>
                  </CardBody> */}
                </Card>
              </Col>
              <Col md="12">
                <Card>
                  <CardHeader>Total API Consumed Analysis</CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <Card className="bg-default">
                          <CardBody>
                            <Row>
                              <div className="col text-center">
                                <span className="h2 font-weight-bold mb-0 text-white text-center">
                                  350
                                </span>
                                <CardTitle className="text-uppercase text-muted mb-0 text-white text-center">
                                  Post
                                </CardTitle>
                              </div>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className="bg-danger">
                          <CardBody>
                            <Row>
                              <div className="col text-center">
                                <span className="h2 font-weight-bold mb-0 text-white text-center">
                                  877
                                </span>
                                <CardTitle className="text-uppercase text-muted mb-0 text-white text-center">
                                  get
                                </CardTitle>
                              </div>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <Card className="bg-warning">
                          <CardBody>
                            <Row>
                              <div className="col text-center">
                                <span className="h2 font-weight-bold mb-0 text-white text-center">
                                  678
                                </span>
                                <CardTitle className="text-uppercase text-muted mb-0 text-white text-center">
                                  Put
                                </CardTitle>
                              </div>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="6">
                        <Card className="bg-success">
                          <CardBody>
                            <Row>
                              <div className="col text-center">
                                <span className="h2 font-weight-bold mb-0 text-white text-center">
                                  345
                                </span>
                                <CardTitle className="text-uppercase text-muted mb-0 text-white text-center">
                                  Delete
                                </CardTitle>
                              </div>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>Audit Log</CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="time" scope="col">
                        Log ID
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Username
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Activity Log
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Activity Time
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        IP Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AL322343c</td>
                      <td>smith0123</td>
                      <td>login</td>
                      <td>1/2/2019 4:00 pm</td>
                      <td>192.168.9.123</td>
                    </tr>
                    <tr>
                      <td>AL234113c</td>
                      <td>john897</td>
                      <td>change billing info</td>
                      <td>31/10/2019 4:00 pm</td>
                      <td>192.168.9.123</td>
                    </tr>
                    <tr>
                      <td>AL565758</td>
                      <td>kassim6252</td>
                      <td>export product database as pdf</td>
                      <td>15/10/2019 9:00 pm</td>
                      <td>192.168.9.123</td>
                    </tr>
                    <tr>
                      <td>AL82732w</td>
                      <td>seith3329</td>
                      <td>download transaction history</td>
                      <td>25/5/2019 5:00 pm</td>
                      <td>192.168.9.123</td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
