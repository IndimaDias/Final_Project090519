import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from 'react-bootstrap/Jumbotron'

function About() {
  return (
    <div>
      <Hero backgroundImage="https://cdn.pixabay.com/photo/2018/04/17/11/43/paper-3327341_960_720.jpg">
        <h1>Events Planner</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to events planner for all the dads!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
</Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
