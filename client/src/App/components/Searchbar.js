import React from 'react';
import { Button, Form, Input, Row, Col, Container,InputGroup, InputGroupAddon,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons'; 

const Searchbar = () => {
    return (
        <Container>
            <Row>
                <Col sm="12" lg={{ size: 8, offset: 3 }}>
                    <Form className="mt-2">
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
