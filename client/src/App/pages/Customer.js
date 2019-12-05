import React, { useState } from 'react';
import Searchbar from '../components/Searchbar';
import MenuDisplay from '../components/MenuDisplay';
import GoogleApiWrapper from '../components/MapApp';
import { Container, Row, Col } from 'reactstrap';


const Customer = () => {

  const [active, setActive] = useState({ state: false });
  const [menu, setMenu] = useState({ id: 0 });
  const changeState = bool => setActive({ state: bool });
  const updateMenu = menuId => { console.log("Hitme"); setMenu({ id: menuId }) };
  return (
    <Container className="mb-3">
      <Row>
        <Col lg={4}>
          <Searchbar />
          {active.state && (<MenuDisplay menu={menu.id} />)}
        </Col>
        <Col lg={8}>
          <GoogleApiWrapper menu={updateMenu} active={changeState} />
        </Col>
      </Row>
    </Container>
  )
}

export default Customer;