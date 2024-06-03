import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./App.css";
import MixedChart from './MixedChart';
import VictoryChart from './VictoryChart';
import TableData from './TableData';

function App() {
  return (
    <Container fluid className="layout">
      {/* Divided the page into multiple sections */}

      <section className="navBar">       
        {/* Created responsive navigation bar  */}
        <div id="navbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src='favicon.ico' alt="Top Dove Bhd" style={{ width: "50px" }} />&ensp; Top Dove Bhd
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#financials">Dashboard</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#reports">Reports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

       {/* Designed Dashboard Layout using Grid system. */}
      {/* Integrated chart libraries (Chart.js & Victory) to visualize data trends */}
      <section id="financials">
        <Row className="row">
          <Col className="col1" xs={12} md={12} lg={8}>
            <h1>Financials</h1>
            <MixedChart />
          </Col>
          <Col className="col2" xs={12} md={12} lg={4}>
            <VictoryChart />
          </Col>
        </Row>
      </section>

      {/* Utilized React Bootstrap's Table component to showcase financial statements */}
      <section id="reports">
        <Row className="row">
          <Col className="col3">
            <TableData />
          </Col>
        </Row>
      </section>

      <section id="contact">
        <div className="divider"></div>
        <Row className="row4">
          <Col className="col4">
            <footer className="footer">
              <h4>Contact us:</h4>
              <p>
                <a href="mailto:contact@example.com">top_dove@email.com</a> |
                <a href="tel:+123456789">+078-324 5678</a> |
                <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer">Our Location</a>
              </p>
            </footer>
          </Col>
        </Row>
      </section>

    </Container>
  );
}

export default App;
