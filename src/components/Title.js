import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    margin: 15px 0;
    font-size: 40px;
`

const Title = props => {
    return (
        <Heading>
            <h1>React YouTube Search!</h1>
        </Heading>
    )
}

export default Title;