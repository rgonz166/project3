import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardBody, CardHeader} from 'reactstrap';
import Category from '../components/Category';

 class BusinessInfo extends Component {
     constructor(props){
         super(props);
         this.state ={
             auth0: this.props.user,
             owner: '',
             storeName: '',
             items: [],
         }
     }
     
    submit = (e) => {
        e.preventDefault()

    }
    
   componentDidMount(){
       this.setState({items: Category})
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
                                            {this.state.items.map(choice =>
                                            <option>
                                                {choice}
                                            </option>
                                            )}
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