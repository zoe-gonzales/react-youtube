import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import styled from 'styled-components';

const ClearBtn = styled.span`
    color: skyblue;
    font-weight: 300;
    font-size: 30px;
    position: absolute;
    top: -8px;
    right: 10px;
    cursor: pointer;

    :hover {
        color: purple;
    }
`
// Another way to do styling of components grabbed from reactstrap - may not work with 100% of reactstrap components
// const StyleFormGroup = style(FormGroup)`
//     position: relative;
// `

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleInputChange = event => {
        // console.log(event.target);
        const { value } = event.target;
        this.setState({ term: value });
        this.props.searchYouTube(value);
    }

    render() {
        return (
            <Form onSubmit={event => event.preventDefault()}>
                <FormGroup style={{ position: "relative" }}>
                    <Label for="search" hidden>Search</Label>
                    <Input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="search" 
                        value={this.state.term}
                        onChange={this.handleInputChange}
                    />
                    <ClearBtn onClick={() => this.setState({term: ""})}>x</ClearBtn>
                </FormGroup>
            </Form>
        )
    }
}

export default SearchBar;