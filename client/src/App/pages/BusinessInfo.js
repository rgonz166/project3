import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardBody, CardHeader} from 'reactstrap';


 class BusinessInfo extends Component {
     constructor(props){
         super(props);
         this.state ={
             auth0: this.props.user,
             owner: '',
             storeName: '',
            

         }
     }
     
    submit = (e) => {
        e.preventDefault()

    }
    
   

    render() {
        const { } = this.props;
        return (
            <Container className="mb-3">
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader ><strong>Business Information</strong> </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Input 
                                        type="text" 
                                        name="contact" 
                                        id="contact" 
                                        placeholder="Owner" 
                                        
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
                                        placeholder="City (optional)" 
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input 
                                        type="text" 
                                        name="state" 
                                        placeholder="State (optional)" 
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
                                            <option>American</option>
                                            <option>American Fusion</option>
                                            <option>Asian Fusion</option>
                                            <option>BBQ</option>
                                            <option>British</option>
                                            <option>Burgers</option>
                                            <option>California</option>
                                            <option>Chinese</option>
                                            <option>Eclectic</option>
                                            <option>Greek</option>
                                            <option>German</option>
                                            <option>Hawaiian</option>
                                            <option>Hot Dogs</option>
                                            <option>Italian</option>
                                            <option>Indian</option>
                                            <option>Japanese</option>
                                            <option>Japanese Fusion</option>
                                            <option>Korian</option>
                                            <option>Lobster</option>
                                            <option>Mexican</option>
                                            <option>Mediterranean</option>
                                            <option>Middle Eastern</option>
                                            <option>New York</option>
                                            <option>Peruvian</option>
                                            <option>Pizza</option>
                                            <option>Polish</option>
                                            <option>Sea food</option>
                                            <option>Sushi</option>
                                            <option>Tacos</option>
                                            <option>Thai</option>
                                            <option>Vegan</option>
                                            <option>Vegetarian</option>
                                        </Input>
                                    </FormGroup>
                                </Form>
                                <Button color="success" onClick={this.submit}>Submit</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default BusinessInfo;