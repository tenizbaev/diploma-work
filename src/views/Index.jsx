import React from "react";
import { Container, Row } from "reactstrap";


import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";


import Hero from "./IndexSections/Hero.jsx";
import Typography from "./IndexSections/Typography.jsx";
import Carousel from "./IndexSections/Carousel.jsx";

class Index extends React.Component {
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
          <Hero />
          <section className="section section-components">
            <Container>
              <Row className="row-grid justify-content-between align-items-center mt-lg">
              </Row>
              <Typography />
              <Carousel />
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
