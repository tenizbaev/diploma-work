import React from "react";

import {Card,CardBody,Container,Row,Col} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";


class Rooms extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        lorem
                        <span>lorem</span>
                      </h1>
                      <p className="lead text-white">
                        lorem
                      </p>
                      <div className="btn-wrapper">
                       
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          </div>
                          <h6 className="text-primary text-uppercase">
                            lorem
                          </h6>
                          <p className="description mt-3">
                          lorem
                          </p>
                          <div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          </div>
                          <h6 className="text-success text-uppercase">
                          lorem
                          </h6>
                          <p className="description mt-3">
                          lorem
                          </p>
                          <div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          </div>
                          <h6 className="text-warning text-uppercase">
                          lorem
                          </h6>
                          <p className="description mt-3">
                          lorem
                          </p>
                          <div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          </div>
                          <h6 className="text-warning text-uppercase">
                          lorem
                          </h6>
                          <p className="description mt-3">
                          lorem
                          </p>
                          <div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          </div>
                          <h6 className="text-warning text-uppercase">
                          lorem
                          </h6>
                          <p className="description mt-3">
                          lorem
                          </p>
                          <div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          </div>
                          <h6 className="text-warning text-uppercase">
                          lorem
                          </h6>
                          <p className="description mt-3">
                          lorem
                          </p>
                          <div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
         
          
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Rooms;
