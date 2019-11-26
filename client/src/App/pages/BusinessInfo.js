import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardBody, CardHeader } from 'reactstrap';

class BusinessInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth0: this.props.user,
            owner: '',
            storeName: '',
            categories: '',
            city: '',
            state: ''
        }
    }


    componentDidMount() {
        console.log(this.state.auth0);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = e => {
        e.preventDefault();
        const newVendor = {
            storeName: this.state.storeName,
            owner: this.state.owner,
            ownerId: this.state.auth0,
            categories: [this.state.categories],
            city: this.state.city ? this.state.city : '',
            state: this.state.state ? this.state.state : '',
        }

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
                                            name="owner"
                                            id="contact"
                                            placeholder="Owner"

                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input
                                            type="text"
                                            name="storeName"
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
                                            name="categories"
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
                                <Button color="success" onClick={this.handleFormSubmit}>Submit</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default BusinessInfo;