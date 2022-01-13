import React from "react";
import PropTypes from 'prop-types';

// Styles
import {Wrapper, Content} from './Grid.styles'

const Grid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

Grid.protoTypes = {
    header: PropTypes.string,
    children: PropTypes.string
}

export default Grid;