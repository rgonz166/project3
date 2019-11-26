import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Container, Card, CardBody, CardHeader } from 'reactstrap';
import { Redirect } from "react-router-dom";
import Category from '../components/Category';
import API from '../utils/API';

class BusinessInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth0: this.props.user,
            owner: '',
            storeName: '',
            categories: '',
            city: '',
            state: '',
            items: [],
            status: 0
        }
    }


    componentDidMount() {
        this.setState({ items: Category })
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
        const menuObj = { menuName: this.state.storeName, food: [] };
        API.createMenu(menuObj)
            .then(reply => {
                console.log("This is the reply: ", reply, reply.data._id);
                console.log("Type of ID", typeof (reply.data._id));
                let newVendor = {
                    storeName: this.state.storeName,
                    owner: this.state.owner,
                    ownerId: this.state.auth0,
                    categories: [this.state.categories],
                    city: this.state.city ? this.state.city : '',
                    state: this.state.state ? this.state.state : '',
                    menu: reply.data._id
                }
                console.log("Object to be Submitted: ", newVendor);
                API.createVendor(newVendor)
                    .then(reply => {
                        console.log(reply);
                        this.setState({ status: 1 });
                    }).catch(err => console.log("Vendor err: ", err));
            }).catch(err => console.log(err));
    }

    render() {
        switch (this.state.status) {
            case 0:
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
                                                    onChange={this.handleInputChange}
                                                    placeholder="Owner"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    name="storeName"
                                                    id="business-name"
                                                    onChange={this.handleInputChange}
                                                    placeholder="Business name"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    name="city"
                                                    onChange={this.handleInputChange}
                                                    placeholder="City (optional)"
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input
                                                    type="text"
                                                    name="state"
                                                    onChange={this.handleInputChange}
                                                    placeholder="State (optional)"
                                                />
                                            </FormGroup>

                                            <FormGroup>
                                                <Label for="category-list">Category</Label>
                                                <Input
                                                    type="select"
                                                    name="categories"
                                                    id="category-list"
                                                    onChange={this.handleInputChange}
                                                    placeholder="Select Business Category"
                                                >
                                                    <option>Select category</option>
                                                    {this.state.items.map(choice =>
                                                        <option key={choice}>
                                                            {choice}
                                                        </option>
                                                    )}
                                                </Input>
                                            </FormGroup>
                                        </Form>
                                        <Button
                                            color="success"
                                            disabled={!(this.state.owner && this.state.storeName)}
                                            onClick={this.handleFormSubmit}
                                        >
                                            Submit
                                    </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                )
            case 1:
                return <Redirect to='/menu' />
        }

    }
}
export default BusinessInfo;