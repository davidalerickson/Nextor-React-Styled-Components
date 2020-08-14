import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const FeaturesWrapper = styled.div`
    background-color: ${colors.GreyLight02};
    grid-column: center-start / center-end;
`

export class Features extends Component {
    render() {
        return (
            <FeaturesWrapper>
                {this.props.children}
            </FeaturesWrapper>
        )
    }
}

export default Features
