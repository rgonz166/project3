import React from 'react';
import { Button, Form, Input, Row, Col, Container,InputGroup, InputGroupAddon,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons'; 

const Searchbar = () => {
    return (
        <Container className="mb-3">
            <Row>
                <Col md={12} >
                    <Form>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button color="warning"><FontAwesomeIcon icon={faSearch}/></Button>
                            </InputGroupAddon>   
                            <Input />
                        </InputGroup>
                    </Form>
                </Col>
            </Row>       
        </Container>        
    );
}

export default Searchbar;
