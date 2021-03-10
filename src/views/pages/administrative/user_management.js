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
  CardTitle
} from "reactstrap";

// core components

import SimpleHeader from "components/Headers/usermanagementHeader.js";
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
  chartDevDash
} from "variables/charts.js";
import Linechart2 from "variables/Linechart2";
import { List } from "@amcharts/amcharts4/core";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
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
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
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
          Success.
        </ReactBSAlert>
      )
    });
  };
  hideAlert = () => {
    this.setState({
      alert: null
    });
  };

  render() {
    return (
      <>
        {this.state.alert}
        <div className="rna-wrapper">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <SimpleHeader parentName="Administrative" name="User Management" />
        <Container className="mt--6" fluid>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader className="bg-transparent">
                  New User Registered
                </CardHeader>
                <Linechart2 />
                {/* <CardBody>
                  <div className="chart">
                    <Line
                      data={chartExample3.data}
                      options={chartExample3.options}
                      className="chart-canvas"
                      id="chart-doughnut"
                    />
                  </div>
                </CardBody> */}
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>User Search</CardHeader>
                <CardHeader>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input id="exampleFormControlSelect1" type="select">
                          <option>Select Status</option>
                          <option>Active</option>
                          <option>Not Active</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder="Email"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input id="exampleFormControlSelect1" type="select">
                          <option>Select User Type</option>
                          <option>Developer</option>
                          <option>Admin</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button size="sm" color="primary" onClick={this.infoAlert}>
                      Search
                    </Button>
                  </div>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="time" scope="col">
                        ID
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Username
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Email
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Status
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        User Type
                      </th>
                      <th>Subscribed API</th>
                      <th className="sort" data-sort="status" scope="col">
                        Last Login
                      </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01212</td>
                      <td>john3213</td>
                      <td>john3213@email.com</td>
                      <td>
                        <Badge size="sm" color="success">
                          In Use
                        </Badge>
                      </td>
                      <td>Developer</td>
                      <td>
                        <div className="checklist-info">
                          <h5 className="checklist-title mb-0">
                            /base-rate/bank-code
                          </h5>
                          <small>
                            User can login to the account and manage profile,
                            Subscribe new API, manage Subscribed API.
                          </small>
                        </div>
                        <div className="checklist-info">
                          <h5 className="checklist-title mb-0">
                            /exchange_rate/
                          </h5>
                          <small>
                            The conversion between Malaysia currency with other
                            country currency.
                          </small>
                        </div>
                      </td>
                      <td>01/02/2019</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("formModal")}
                          size="sm"
                        >
                          <i class="fas fa-edit"></i>
                        </Button>
                        <Modal
                          size="lg"
                          className="modal-dialog-centered"
                          isOpen={this.state.formModal}
                          toggle={() => this.toggleModal("formModal")}
                        >
                          <div className="modal-header">
                            <h6
                              className="modal-title"
                              id="modal-title-default"
                            >
                              View User Detail
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
                              <Col md="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect1"
                                  >
                                    ID
                                  </label>
                                  <Input
                                    id="example4cols1Input"
                                    value="01212"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect1"
                                  >
                                    Username
                                  </label>
                                  <Input
                                    id="example4cols1Input"
                                    value="john3213"
                                    type="email"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect1"
                                  >
                                    Email
                                  </label>
                                  <Input
                                    id="example4cols1Input"
                                    value="john3213@email.com"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect1"
                                  >
                                    Status
                                  </label>
                                  <Input
                                    id="example4cols1Input"
                                    value="In Use"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect1"
                                  >
                                    User Type
                                  </label>
                                  <Input
                                    id="example4cols1Input"
                                    value="Developer"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                              <Col md="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect1"
                                  >
                                    Last Login
                                  </label>
                                  <Input
                                    id="example4cols1Input"
                                    value="01/02/2019"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col md="12">
                                <Card>
                                  <CardHeader>Subscribed API</CardHeader>{" "}
                                  <ListGroup data-toggle="checklist">
                                    <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                                      <div className="checklist-item checklist-item-success">
                                        <div className="checklist-info">
                                          <h5 className="checklist-title mb-0">
                                            /base-rate/bank-code
                                          </h5>
                                          <small>
                                            User can login to the account and
                                            manage profile, Subscribe new API,
                                            manage Subscribed API.
                                          </small>
                                        </div>
                                        {/* <div>
                                            <div className="custom-control custom-checkbox custom-checkbox-success">
                                              <Button
                                                size="sm"
                                                color="primary"
                                                onClick={() =>
                                                  this.toggleModal(
                                                    "notificationModal"
                                                  )
                                                }
                                              >
                                                View
                                              </Button>
                                            </div>
                                          </div> */}
                                      </div>
                                    </ListGroupItem>
                                    <ListGroupItem className="checklist-entry flex-column align-items-start py-4 px-4">
                                      <div className="checklist-item checklist-item-success">
                                        <div className="checklist-info">
                                          <h5 className="checklist-title mb-0">
                                            /exchange_rate/
                                          </h5>
                                          <small>
                                            The conversion between Malaysia
                                            currency with other country
                                            currency.
                                          </small>
                                        </div>
                                      </div>
                                    </ListGroupItem>
                                  </ListGroup>
                                </Card>
                              </Col>
                            </Row>
                          </div>
                        </Modal>
                      </td>
                    </tr>
                    <tr>
                      <td>716171</td>
                      <td>kassim0991</td>
                      <td>kassim0991@email.com</td>
                      <td>
                        <Badge size="sm" color="success">
                          In Use
                        </Badge>
                      </td>
                      <td>Admin</td>
                      <td>
                        <div className="checklist-info">
                          <h5 className="checklist-title mb-0">
                            /base-rate/bank-code
                          </h5>
                          <small>
                            User can login to the account and manage profile,
                            Subscribe new API, manage Subscribed API.
                          </small>
                        </div>
                        <div className="checklist-info">
                          <h5 className="checklist-title mb-0">
                            /exchange_rate/
                          </h5>
                          <small>
                            The conversion rate between Malaysia currency with
                            other country currency.
                          </small>
                        </div>
                        <div className="checklist-info">
                          <h5 className="checklist-title mb-0">/profix_fpx/</h5>
                          <small>Payment gateway platform</small>
                        </div>
                      </td>
                      <td>31/10/2019</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("formModal")}
                          size="sm"
                        >
                          <i class="fas fa-edit"></i>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>81711</td>
                      <td>kamal121</td>
                      <td>kamal121@email.com</td>
                      <td>
                        <Badge size="sm" color="success">
                          In Use
                        </Badge>
                      </td>
                      <td>Developer</td>
                      <td>
                        <div className="checklist-info">
                          <h5 className="checklist-title mb-0">
                            /base-rate/bank-code
                          </h5>
                          <small>
                            User can login to the account and manage profile,
                            Subscribe new API, manage Subscribed API.
                          </small>
                        </div>
                        <div className="checklist-info">
                          <h5 className="checklist-title mb-0">
                            /exchange_rate/
                          </h5>
                          <small>
                            The conversion rate between Malaysia currency with
                            other country currency.
                          </small>
                        </div>
                        <div className="checklist-info">
                          <h5 className="checklist-title mb-0">/profix_fpx/</h5>
                          <small>Payment gateway platform</small>
                        </div>
                      </td>
                      <td>20/01/2019</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("formModal")}
                          size="sm"
                        >
                          <i class="fas fa-edit"></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
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
