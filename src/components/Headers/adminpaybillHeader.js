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
  Progress,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class CardsHeader extends React.Component {
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
                {/* <Col className="text-right" lg="6" xs="5">
                  <Button
                    className="btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    New
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >
                    Filters
                  </Button>
                </Col> */}
              </Row>

              <Row>
                <Col md="6" xl="3">
                  <Card className="bg-gradient-warning border-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 text-white"
                          >
                            Daily Revenue
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0 text-white">
                            RM 12345
                          </span>
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max="100"
                            value="30"
                            color="success"
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" xl="3">
                  <Card className="bg-gradient-info border-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 text-white"
                          >
                            Weekly Revenue
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0 text-white">
                            RM 234567
                          </span>
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max="100"
                            value="50"
                            color="success"
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" xl="3">
                  <Card className="bg-gradient-danger border-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 text-white"
                          >
                            Monthly Revenue
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0 text-white">
                            RM 877234
                          </span>
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max="100"
                            value="80"
                            color="success"
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6" xl="3">
                  <Card className="bg-gradient-default border-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 text-white"
                          >
                            Total Revenue
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0 text-white">
                            RM 8717273
                          </span>
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max="100"
                            value="90"
                            color="success"
                          />
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
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
