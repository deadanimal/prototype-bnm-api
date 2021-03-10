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

import SimpleHeader from "components/Headers/adminpaybillHeader.js";
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartBillPay,
  chartExample6,
  chartExample7,
  chartGis,
  chartDevDash,
  chartAdminDash
} from "variables/charts.js";
import Barchart3 from "variables/Barchart3";
import Piechart2 from "variables/Piechart2";
import Linechart3 from "variables/Linechart3";

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

  notify = type => {
    let options = {
      place: "tc",
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {" "}
            Notification
          </span>
          <span data-notify="message"></span>
        </div>
      ),
      type: type,
      icon: "ni ni-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
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
          Successfully Add New API.
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
        <SimpleHeader parentName="Administrative" name="Payment & Billing" />
        <Container className="mt--6" fluid>
          <Row>
            <Col md="7">
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader className="bg-transparent">
                      Income Received Analysis By Month
                    </CardHeader>
                    <Barchart3 />
                    {/* <CardBody>
                      <div className="chart">
                        <Bar
                          data={chartExample3.data}
                          options={chartExample3.options}
                          className="chart-canvas"
                          id="chart-bars"
                        />
                      </div>
                    </CardBody> */}
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="5">
              <Card>
                <CardHeader className="bg-transparent">
                  Overdue vs Received Payment
                </CardHeader>
                <Piechart2 />
                {/* <CardBody>
                  <div className="chart">
                    <Pie
                      data={chartBillPay.data}
                      options={chartBillPay.options}
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
                <CardHeader>API Bill List</CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th className="sort" data-sort="time" scope="col">
                        API Name
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        API Version
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        API User
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Bill Amount
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Date Generated
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Status
                      </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>/account_user/</td>
                      <td>1.0.3</td>
                      <td>Kassim</td>
                      <td>RM 232</td>
                      <td>1/2/2019</td>
                      <td>
                        <Badge size="sm" color="warning">
                          Overdue
                        </Badge>
                      </td>
                      <td>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={() => this.toggleModal("formModal")}
                        >
                          View Usage
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
                              Income Receive analysis by month
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
                                <Card>
                                  <CardHeader className="bg-success">
                                    Billing
                                  </CardHeader>
                                  <CardBody className="text-center">
                                    Billing Amount : RM 1000
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col md="6">
                                <Card>
                                  <CardHeader className="bg-info">
                                    Subscription
                                  </CardHeader>
                                  <CardBody>
                                    <Row>
                                      <Col md="1"></Col>
                                      <Col md="8">API Subscription :</Col>
                                      <Col md="2">20</Col>
                                    </Row>
                                    <Row>
                                      <Col md="1"></Col>
                                      <Col md="8">API Used :</Col>
                                      <Col md="2">30</Col>
                                    </Row>
                                    <Row>
                                      <Col md="1"></Col>
                                      <Col md="8">App Created :</Col>
                                      <Col md="2">50</Col>
                                    </Row>
                                  </CardBody>
                                </Card>
                              </Col>
                            </Row>
                            <Linechart3 />
                          </div>
                          <div className="modal-footer text-right">
                            <Button size="sm" color="primary">
                              Print
                            </Button>
                          </div>
                        </Modal>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={e => {
                            this.notify("success");
                          }}
                        >
                          Notify
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>/profix_fpx/</td>
                      <td>2.0.5</td>
                      <td>John</td>
                      <td>RM 456</td>
                      <td>31/10/2019</td>
                      <td>
                        <Badge size="sm" color="success">
                          Payment Received
                        </Badge>
                      </td>
                      <td>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={() => this.toggleModal("formModal")}
                        >
                          View Usage
                        </Button>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={e => {
                            this.notify("success");
                          }}
                        >
                          Notify
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>/exchange_rate/</td>
                      <td>3.0.1</td>
                      <td>Seith</td>
                      <td>RM 674</td>
                      <td>15/10/2019</td>
                      <td>
                        <Badge size="sm" color="success">
                          Payment Received
                        </Badge>
                      </td>
                      <td>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={() => this.toggleModal("formModal")}
                        >
                          View Usage
                        </Button>
                        <Button
                          color="primary"
                          size="sm"
                          onClick={e => {
                            this.notify("success");
                          }}
                        >
                          Notify
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
                      <PaginationItem className="disabled">
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
