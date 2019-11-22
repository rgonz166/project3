import React, { Component } from 'react';
import { Button, Form, Input, Row, Col, Container,InputGroup, InputGroupAddon,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch  } from '@fortawesome/free-solid-svg-icons'; 
import "./searchbar.css";
  
export default class AutoComplete extends Component {
    constructor (props){
        super (props);
        this.items = [
            
            'Mexican',
            'Sea food',
            'American Fusion',
            'Chinese',
            'Middle Eastern'
        ];  
        this.state={
            suggestions: [],
            text: "",
        };     
    }
    
    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const matchlen = new RegExp (`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => matchlen.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
        
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
                                <InputGroupAddon addonType="prepend">
                                    <Button color="warning"><FontAwesomeIcon icon={faSearch}/></Button>
                                </InputGroupAddon>   
                                <Input value={text} onChange={this.onTextChanged} /> 
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
