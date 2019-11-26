import React, { Component } from 'react';
import Searchbar from '../components/Searchbar/Searchbar';
import GoogleApiWrapper from '../components/MapApp';
import { Container, Row, Col } from 'reactstrap';
import MenuDisplay from '../components/MenuDisplay';

const Customer = () => {
  return (
    <Container className="mb-3">
      <Row>
        <Col lg={4}>
          <Searchbar/>
          <MenuDisplay vendorId={"auth0%7C5dd0577c460ca50e25ac3769"} />
        </Col>
        <Col lg={8}>
          <GoogleApiWrapper />
        </Col>
      </Row>
    </Container>
  )
}

export default Customer;