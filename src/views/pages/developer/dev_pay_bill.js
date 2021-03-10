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
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

// core components

import SimpleHeader from "components/Headers/simpleHeader.js";
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
  chartDevPaybill
} from "variables/charts.js";
import Barchart7 from "variables/Barchart7";

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
          Successfully adding new data.
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
        <SimpleHeader parentName="Developer" name="Payment & Billing" />
        <Container className="mt--6" fluid>
          <Row>
            <Col md="7">
              <Card>
                <CardHeader className="bg-transparent">
                  Payment Made By BNM By Month
                </CardHeader>
                <Barchart7 />
                {/* <CardBody>
                  <div className="chart">
                    <Bar
                      data={chartDevPaybill.data}
                      options={chartDevPaybill.options}
                      className="chart-canvas"
                      id="chart-doughnut"
                    />
                  </div>
                </CardBody> */}
              </Card>
            </Col>
            <Col md="5">
              <Card>
                <CardHeader>API Consumption This Month</CardHeader>
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
                <CardHeader>API Subscribe List</CardHeader>
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
                          size="sm"
                          color="primary"
                          onClick={() => this.toggleModal("defaultModal")}
                        >
                          Make Payment
                        </Button>
                      </td>
                      <Modal
                        className="modal-dialog-centered"
                        marginBottom="0px !important"
                        isOpen={this.state.defaultModal}
                        toggle={() => this.toggleModal("defaultModal")}
                      >
                        <div className="bg-gradient-primary">
                          <CardBody>
                            <Row className="justify-content-between align-items-center">
                              <div className="col">
                                <img
                                  alt="..."
                                  src={require("assets/img/icons/cards/mastercard.png")}
                                />
                              </div>
                              <Col className="col-auto">
                                <div className="d-flex align-items-center">
                                  <small className="text-white font-weight-bold mr-3">
                                    Make default
                                  </small>
                                  <div>
                                    <label className="custom-toggle custom-toggle-white">
                                      <input defaultChecked type="checkbox" />
                                      <span
                                        className="custom-toggle-slider rounded-circle"
                                        data-label-off="No"
                                        data-label-on="Yes"
                                      />
                                    </label>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <div className="mt-4">
                              <Form className="form-primary" role="form">
                                <FormGroup>
                                  <InputGroup
                                    className={classnames(
                                      "input-group-alternative mb-3",
                                      {
                                        focused: this.state.nameOnCard
                                      }
                                    )}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="ni ni-single-02" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Name on card"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ nameOnCard: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ nameOnCard: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <InputGroup
                                    className={classnames(
                                      "input-group-alternative mb-3",
                                      {
                                        focused: this.state.cardNumber
                                      }
                                    )}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="ni ni-credit-card" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Card number"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ cardNumber: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ cardNumber: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <Row>
                                  <Col xs="6">
                                    <FormGroup>
                                      <InputGroup
                                        className={classnames(
                                          "input-group-alternative mb-3",
                                          {
                                            focused: this.state.date
                                          }
                                        )}
                                      >
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                            <i className="ni ni-calendar-grid-58" />
                                          </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                          placeholder="MM/YY"
                                          type="text"
                                          onFocus={e =>
                                            this.setState({ date: true })
                                          }
                                          onBlur={e =>
                                            this.setState({ date: false })
                                          }
                                        />
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>
                                  <Col xs="6">
                                    <FormGroup>
                                      <InputGroup
                                        className={classnames(
                                          "input-group-alternative",
                                          {
                                            focused: this.state.ccv
                                          }
                                        )}
                                      >
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                          </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                          placeholder="CCV"
                                          type="text"
                                          onFocus={e =>
                                            this.setState({ ccv: true })
                                          }
                                          onBlur={e =>
                                            this.setState({ ccv: false })
                                          }
                                        />
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Button block color="info" type="button">
                                  Save new card
                                </Button>
                              </Form>
                            </div>
                          </CardBody>
                        </div>
                      </Modal>
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
                          size="sm"
                          color="primary"
                          onClick={() => this.toggleModal("defaultModal")}
                        >
                          Make Payment
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
                          size="sm"
                          color="primary"
                          onClick={() => this.toggleModal("defaultModal")}
                        >
                          Make Payment
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
