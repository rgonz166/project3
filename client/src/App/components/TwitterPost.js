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
      hashtags: '',
      maxChars: 280,
      tweetChars: 0,
      tweetCharsLeft:280
    }
  }

  // sendTweet = () => {
  //   twitterAPI.sendTweet(this.state.tweetBody);
  // }

  onChange = (event) => {
    this.setState({
      tweetBody: event.target.value,
      tweetChars: event.target.value.length,
      tweetCharsLeft: this.state.maxChars - event.target.value.length
    })
  }

  setUserSettings = (id) => {
    API.getVendor(id)
      .then(res => {
        var data = res.data[0];
        this.setState({
          owner: data.owner,
          hashtags: data.hashtags.join(" "),
          tweetBody: data.customTweet
        });
        this.updateCharsLeft();
      })
  }

  updateCharsLeft = () => {
    this.setState({
      tweetCharsLeft: this.state.maxChars - this.state.tweetBody.length,
    });
  }

  sendTweet = () => {
    API.sendTweet(this.state.tweetBody)
      .then(result => {
        console.log("Sending Tweet", result);
      })
      .catch(err => console.log(err));
  }

  updateCustomTweet = () => {
    let tweet = {
      id: this.state.auth0,
      message: this.state.tweetBody
    }
  }

  // Note: add custom user tweet body from db in did mount
  componentDidMount(){
    this.setUserSettings(this.state.auth0);
    this.updateCharsLeft();
  }

  submit = (e) => {
    e.preventDefault();
    this.sendTweet();
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
                      <label className="switch">
                        <input type="checkbox" />
                          <span className="slider round"></span>
                      </label>
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