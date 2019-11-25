import React, { Component } from "react"
import {Button,Form,FormGroup,Input,Row,Col,Container,Card,CardBody,CardHeader} from "reactstrap"
import API from "../utils/API";

class TwitterPost extends Component {

  constructor(props){
    super(props);
    this.state = {
      auth0: this.props.user,
      owner: '',
      tweetBody: '',
      tags: '',
      maxChars: 280,
      tweetChars: 0,
      tweetCharsLeft:280
    }
  }

  onChange = (event) => {
    this.setState({
      tweetBody: event.target.value,
      tweetChars: event.target.value.length,
      tweetCharsLeft: this.state.maxChars - event.target.value.length
    })
  }

  // Note: add custom user tweet body from db in did mount
  componentDidMount(){
    this.getUser();
    this.setState({
      tweetCharsLeft: this.state.maxChars - this.state.tweetBody.length,
    })
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
                      value={this.state.tweetBody}
                      onChange={this.onChange}
                      placeholder="Insert tweet"
                      />
                      <p style={{
                        textAlign:"right",
                        color: "#999",
                        fontSize: "12px"
                        }}
                      >
                        Characters Left: <span style={(this.state.tweetCharsLeft < 0)?{color:"red"}:{}}>{this.state.tweetCharsLeft}</span>
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