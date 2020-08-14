import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const RealtorsWrapper = styled.div`
    background-color: ${colors.Secondary};
    grid-column: col-start 7 / full-end;
`

export class Realtors extends Component {
    render() {
        return (
            <RealtorsWrapper>
                {this.props.children}
            </RealtorsWrapper>
        )
    }
}

export default Realtors
