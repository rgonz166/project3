import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container} from 'reactstrap';

 class BusinessInfo extends Component {
    saveAndContinue = (e) => {
        e.preventDefault()
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { } = this.props;
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form>
                        <Label>Business Information</Label>
                            <FormGroup>
                                <Input 
                                type="text" 
                                name="contact" 
                                id="contact" 
                                placeholder="Contact Person" 
                                
                                />
                            </FormGroup>
                             <FormGroup>
                                <Input 
                                type="text" 
                                name="name" 
                                id="business-name" 
                                placeholder="Business name"                                
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                type="text" 
                                name="city" 
                                placeholder="city" 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                type="text" 
                                name="state" 
                                placeholder="State" 
                                />
                            </FormGroup>
                
                             <FormGroup>
                                <Label for="category-list">Category</Label>    
                                 <Input 
                                 type="select" 
                                 name="select" 
                                 id="category-list" 
                                 placeholder="Select Business Category"
                                >
                                    <option>Select category</option>
                                    <option>Mexican</option>
                                    <option>Sea food</option>
                                    <option>American Fusion</option>
                                    <option>Chinese</option>
                                    <option>Middle Eastern</option>
                                    <option>Burgers</option>
                                    <option>Italian</option>
                                 </Input>
                            </FormGroup>
                        </Form>
                        
                        <Button onClick={this.saveAndContinue}>Submit</Button>
                    </Col>
                 </Row>
                 
            </Container>
        )
    }
}
export default BusinessInfo;