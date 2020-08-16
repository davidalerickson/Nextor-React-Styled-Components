import React, { Component } from 'react'
import SVG from 'react-inlinesvg';
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

import Feature from '../widgets/Feature'

const FeaturesWrapper = styled.div`
    grid-column: center-start / center-end;

    margin: 15rem, 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 6rem;
`

export class Features extends Component {
    render() {
        return (
            <FeaturesWrapper>
                <Feature>Feature 1</Feature>
                <Feature>Feature 2</Feature>
                <Feature>Feature 3</Feature>
                <Feature>Feature 4</Feature>
                <Feature>Feature 5</Feature>
                <Feature>Feature 6</Feature>
            </FeaturesWrapper>
        )
    }
}

export default Features
