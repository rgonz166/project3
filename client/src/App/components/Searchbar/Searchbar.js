import React, { Component } from 'react';
import { Button, Form, Input, Row, Col, Container,InputGroup, InputGroupAddon,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons'; 
import Category from '../Category';
import "./searchbar.css";

export default class AutoComplete extends Component {
    constructor (props){
        super (props);  
        this.state={
            suggestions: [],
            text: "",
            items: [],
        };     
    }
    
    onTextChanged = (e) => {
        const items = this.state.items;
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const matchlen = new RegExp (`^${value}`, 'i');
            suggestions = items.sort().filter(v => matchlen.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
        
    }

    componentDidMount() {
        this.setState({items : Category});
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))

    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        } 
        return(
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render() {
        const { text } = this.state;
        return (
           <Container className="autoComplete mb-3">
                <Row>
                    <Col md={12} >
                        <Form>
                            <InputGroup>
                                <Input value={text} onChange={this.onTextChanged} />
                                <InputGroupAddon addonType="append">
                                    <Button color="warning"><FontAwesomeIcon icon={faSearch}/></Button>
                                </InputGroupAddon>     
                            </InputGroup>
                                <ul>
                                    {this.renderSuggestions()}
                                </ul>
                        </Form>
                    </Col>
                </Row>       
            </Container>
        )
    }
}
