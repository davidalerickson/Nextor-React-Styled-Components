import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const HomesWrapper = styled.section`
    background-color: ${colors.Secondary};
    grid-column: center-start / center-end
`

export class Homes extends Component {
    render() {
        return (
            <HomesWrapper>
                {this.props.children}
            </HomesWrapper>
        )
    }
}

export default Homes
