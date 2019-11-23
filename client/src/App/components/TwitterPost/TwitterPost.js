import React, { Component } from "react"
import {Button,Form,FormGroup,Label,Input,Row,Col,Container,Card,CardBody,CardHeader,FormText} from "reactstrap"

class TwitterPost extends Component {

  constructor(props){
    super(props);
    this.state = {
      auth0: this.props.user,
      owner: '',
      tweetBody: '',
      tags: '',
      chars_left: 280
    }
  }

  onChange = (event) => {
    this.setState()
  }

  submit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="twitter-post">
        <Container className="mb-3">
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader >
                  <strong>Twitter Posting</strong>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Input 
                      type="textarea"
                      name="twitter-body"
                      id="twitter-body"
                      placeholder="Insert tweet"
                      />
                      <p style={{
                        textAlign:"right",
                        color: "#999",
                        fontSize: "12px"
                        }}
                      >
                        Characters Left: {this.state.chars_left}
                      </p>
                    </FormGroup>
                  </Form>
                  <Button color="success" onClick={this.submit}>Submit</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default TwitterPost;