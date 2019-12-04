import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import GoogleApiWrapper from '../components/MapApp';
import { Container, Row, Col } from 'reactstrap';


const Customer = () => {
  return (
    <Container className="mb-3">
      <Row>
        <Col lg={4}>
          <Searchbar/>
        </Col>
        <Col lg={8}>
          <GoogleApiWrapper />
        </Col>
      </Row>
    </Container>
  )
}

export default Customer;