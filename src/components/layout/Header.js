import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const HeaderWrapper = styled.header`
    background-color: ${colors.GreyDark01};
    grid-column: full-start / col-end 6;
`

export class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                {this.props.children}
            </HeaderWrapper>
        )
    }
}

export default Header
