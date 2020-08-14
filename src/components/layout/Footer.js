import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const FooterWrapper = styled.footer`
    background-color: ${colors.Secondary};
    grid-column: full-start / full-end;
`

export class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                {this.props.children}
            </FooterWrapper>
        )
    }
}

export default Footer
