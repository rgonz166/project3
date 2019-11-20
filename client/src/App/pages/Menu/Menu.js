import React, { Component } from "react";
import { Card, Col, Row, Container, Form, FormGroup, ListGroup, ListGroupItem, Input, Button } from 'reactstrap';
import API from '../../utils/API';
import "./menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: [],
      menuObj: {},
      itemname: "",
      price: "",
      description: "",
      _id: 1,
      auth0: props.user
    }
  }

  componentDidMount() {
    this.getMenu();
  }

  deleteFood(foodId, ref) {
    console.log("Food ID:", foodId);
    API.removeFood({ id: this.state.menu._id, foodId: foodId })
      .then(function (reply) {
        console.log("Failing This", this);
        ref.getMenu();
      });
  }

  getMenu() {
    API.getVendor(this.state.auth0)
      .then(result => {
        console.log("Getting Menu");
        const menu = result.data[0].menu;
        console.log("Working This", this);
        menu ? this.getFood(menu) : console.log("No Menu Found");
      });
  }

  getFood(foodId) {
    console.log("Getting Food");
    API.getMenu(foodId)
      .then(data => {
        console.log("Getting Food");
        console.log("Data: ", data.data);
        this.setState({ menu: data.data, menuitems: data.data.food });
      });
  }

  deleteItem = id => {
    alert(id)
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.itemname && this.state.price) {
      let menuitems = this.state.menuitems;
      let _id = this.state._id;

      let menuitem = { itemname: this.state.itemname, price: this.state.price };
      menuitem._id = this.state._id;

      menuitem.description = this.state.description != null ? this.state.description : "";
      menuitems.push(menuitem);

      this.setState({ menuitems: menuitems, _id: _id + 1, itemname: "", price: "", description: "" });
    }
  };

  render() {
    return (
      <Container >
        <Row>
          <Col md="4">

            <h2>Add Menu Items</h2>

            <Form>
              <FormGroup>
                <Input
                  value={this.state.itemname}
                  onChange={this.handleInputChange}
                  name="itemname"
                  placeholder="item name (required)"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  name="price"
                  placeholder="price (required)"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  placeholder="description (Optional)"
                />
              </FormGroup>
              <Button
                color="success"
                className="add-menu-item"
                disabled={!(this.state.price && this.state.itemname)}
                onClick={this.handleFormSubmit}
              >
                Add Menu Item
              </Button>
            </Form>
          </Col>
          <Col md={{ size: 8 }} sm="12">

            <h2 className="text-center">Menu</h2>
            <Card className="menu-display text-center">
              {this.state.menuitems.length ? (
                <ListGroup>
                  {this.state.menuitems.map(item => (
                    <ListGroupItem key={item._id} >
                      <strong>
                        {item.foodName}
                      </strong>
                      {" . . . . . . . . . . . . . . . "} ${item.price}
                      <span className="delete-btn" role="button" tabIndex="0" onClick={() => { this.deleteFood(item._id, this) }}>
                        ✗
                    </span> <br />
                      <p>
                        {item.description}
                      </p>

                    </ListGroupItem>
                  ))}
                </ListGroup>
              ) : (
                  <p className="text-center">{this.state.menuitems.length ? "Menu Items Found" : "No Menu Found"}</p>
                )}
            </Card>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Menu;
