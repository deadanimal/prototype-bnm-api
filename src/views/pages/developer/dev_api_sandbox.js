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

import SimpleHeader from "components/Headers/devApiSandboxHeader.js";
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
  chartDevDash,
  chartDevSandbox
} from "variables/charts.js";
import Barchart4 from "variables/Barchart4";
import Barchart5 from "variables/Barchart5";

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
        <SimpleHeader parentName="Developer" name="API Sandbox" />
        <Container className="mt--6" fluid>
          <Row>
            <Col md="7">
              <Card>
                <CardHeader className="bg-transparent">
                  Total Daily API Call
                </CardHeader>
                <Barchart4 />
                {/* <CardBody>
                  <div className="chart">
                    <Bar
                      data={chartDevSandbox.data}
                      options={chartDevSandbox.options}
                      className="chart-canvas"
                      id="chart-doughnut"
                    />
                  </div>
                </CardBody> */}
              </Card>
            </Col>
            <Col xl="5">
              <Card>
                <CardHeader className="bg-transparent">
                  API Consumption Analysis By Month
                </CardHeader>
                <Barchart5 />
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
          </Row>
          <Row>
            <Col md="7">
              <Card>
                <CardHeader>Check API Endpoint</CardHeader>
                <CardBody>
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Input id="exampleFormControlSelect1" type="select">
                          <option>POST</option>
                          <option>PUT</option>
                          <option>GET</option>
                          <option>DELETE</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col>
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
                    <Col md="4">
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder="Key"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder="Value"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                      <span className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          id="customRadio5"
                          name="custom-radio-1"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadio5"
                        >
                          JSON
                        </label>
                      </span>
                    </Col>
                    <Col md="2">
                      <span className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          id="customRadio1"
                          name="custom-radio-1"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadio1"
                        >
                          XML
                        </label>
                      </span>
                    </Col>
                    <Col md="2">
                      <span className="custom-control custom-radio mb-3">
                        <input
                          className="custom-control-input"
                          id="customRadio1"
                          name="custom-radio-1"
                          type="radio"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadio1"
                        >
                          Raw
                        </label>
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        Request Body
                      </label>
                      <FormGroup>
                        <Input
                          id="exampleFormControlTextarea3"
                          resize="none"
                          rows="3"
                          type="textarea"
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
            <Col md="5">
              <Card>
                <CardHeader>Pass Request</CardHeader>
                <CardBody>
                  <Row>
                    <Col md="4">
                      <label
                        className="form-control-label"
                        htmlFor="exampleFormControlSelect1"
                      >
                        GET
                      </label>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder=""
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
                        PUT
                      </label>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder=""
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
                        POST
                      </label>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder=""
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
                        DELETE
                      </label>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          id="example4cols1Input"
                          placeholder=""
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="text-right">
                  <Button size="sm" color="primary" onClick={this.infoAlert}>
                    Clear Past Request
                  </Button>
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
