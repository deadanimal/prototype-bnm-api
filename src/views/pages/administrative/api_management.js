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

import SimpleHeader from "components/Headers/apiHeader.js";
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
import Linechart1 from "variables/Linechart1";
import Piechart1 from "variables/Piechart1";
import Barchartcompare from "variables/Barchartcompare";

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
          Successfully Add New API.
        </ReactBSAlert>
      )
    });
  };

  notify = type => {
    let options = {
      place: "tc",
      message: (
        <div className="alert-text">
          <span className="alert-title" data-notify="title">
            {" "}
            Successfull
          </span>
          <span data-notify="message">Successfully subscribing to the API</span>
        </div>
      ),
      type: type,
      icon: "ni ni-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
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
        <SimpleHeader parentName="Administrative" name="API Management" />
        <Container className="mt--6" fluid>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader className="bg-transparent">
                  Total New Api Registered This Year
                </CardHeader>
                <Linechart1 />
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
            <Col md="6">
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader className="bg-transparent">
                      API Consumption Analsis
                    </CardHeader>
                    <Piechart1 />
                    {/* <CardBody>
                      <div className="chart">
                        <Doughnut
                          data={chartExample5.data}
                          options={chartExample5.options}
                          className="chart-canvas"
                          id="chart-doughnut"
                        />
                      </div>
                    </CardBody> */}
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader className="bg-transparent">
                  API Consumption By Number
                </CardHeader>
                <Barchartcompare />
                {/* <CardBody>
                  <div className="chart">
                    <Bar
                      data={chartExample7.data}
                      options={chartExample7.options}
                      className="chart-canvas"
                      id="chart-bars"
                    />
                  </div>
                </CardBody> */}
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>Add New API Endpoint</CardHeader>
                <CardBody>
                  <Row>
                    <Col md="4">
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        API Name
                      </label>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder="API Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        API Endpoint
                      </label>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder="API Endpoint"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        API Version
                      </label>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder="API Version"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Price rate
                      </label>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder="Price per Call"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="text-right">
                  <Button size="sm" color="primary" onClick={this.infoAlert}>
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>Total API Consume Analysis</CardHeader>
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
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>API List</CardHeader>
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
                        Total Call Made
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Status
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Date
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Deployed By
                      </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>/account_user/</td>
                      <td>1.0.3</td>
                      <td>232</td>
                      <td>
                        <Badge size="sm" color="success">
                          In Use
                        </Badge>
                      </td>
                      <td>1/2/2019</td>
                      <td>Kassim</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("formModal")}
                          size="sm"
                        >
                          View
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
                              View API
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
                                    API Name
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="/account_user/	"
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
                                    API Version
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="1.0.3	"
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
                                    Total Call Made
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="123"
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
                                    disabled
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
                                    Date
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="01/02/2019	"
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
                                    Deployed By
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="Kassim"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                        </Modal>
                      </td>
                    </tr>
                    <tr>
                      <td>/profix_fpx/</td>
                      <td>2.0.5</td>
                      <td>456</td>
                      <td>
                        <Badge size="sm" color="success">
                          In Use
                        </Badge>
                      </td>
                      <td>31/10/2019</td>
                      <td>John</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("formModal")}
                          size="sm"
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>/exchange_rate/</td>
                      <td>3.0.1</td>
                      <td>674</td>
                      <td>
                        <Badge size="sm" color="success">
                          In Use
                        </Badge>
                      </td>
                      <td>15/10/2019</td>
                      <td>Seith</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("formModal")}
                          size="sm"
                        >
                          View
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
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>API Request List</CardHeader>
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
                        Total Call Made
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Status
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Date
                      </th>
                      <th className="sort" data-sort="status" scope="col">
                        Deployed By
                      </th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>/account_user/</td>
                      <td>1.0.3</td>
                      <td>232</td>
                      <td>
                        <Badge size="sm" color="success">
                          In Production
                        </Badge>
                      </td>
                      <td>01/02/2019</td>
                      <td>Kassim</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("notificationModal")}
                          size="sm"
                        >
                          View
                        </Button>
                        <Modal
                          size="lg"
                          className="modal-dialog-centered"
                          isOpen={this.state.notificationModal}
                          toggle={() => this.toggleModal("notificationModal")}
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
                            <Row>
                              <Col md="6">
                                <FormGroup>
                                  <label
                                    className="form-control-label"
                                    htmlFor="exampleFormControlSelect1"
                                  >
                                    API Name
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="/account_user/	"
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
                                    API Version
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="1.0.3	"
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
                                    Total Call Made
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="123"
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
                                    disabled
                                    id="example4cols1Input"
                                    value="In Production"
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
                                    Date
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="01/02/2019	"
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
                                    Deployed By
                                  </label>
                                  <Input
                                    disabled
                                    id="example4cols1Input"
                                    value="Kassim"
                                    type="text"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                        </Modal>
                        <Button
                          size="sm"
                          color="primary"
                          onClick={e => {
                            this.notify("success");
                          }}
                        >
                          Subscribe
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>/profix_fpx/</td>
                      <td>2.0.5</td>
                      <td>456</td>
                      <td>
                        <Badge size="sm" color="success">
                          In Production
                        </Badge>
                      </td>
                      <td>31/10/2019</td>
                      <td>John</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("notificationModal")}
                          size="sm"
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          color="primary"
                          onClick={e => {
                            this.notify("success");
                          }}
                        >
                          Subscribe
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>/exchange_rate/</td>
                      <td>3.0.1</td>
                      <td>674</td>
                      <td>
                        <Badge size="sm" color="danger">
                          In Maintainance
                        </Badge>
                      </td>
                      <td>15/10/2019</td>
                      <td>Seith</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.toggleModal("notificationModal")}
                          size="sm"
                        >
                          View
                        </Button>
                        <Button
                          size="sm"
                          color="primary"
                          onClick={e => {
                            this.notify("success");
                          }}
                        >
                          Subscribe
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
