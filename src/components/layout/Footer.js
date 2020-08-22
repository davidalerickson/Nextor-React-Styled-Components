import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

import NavFooter from '../widgets/NavFooter'
import Copyright from '../widgets/Copyright'

const FooterWrapper = styled.footer`
    background-color: ${colors.Secondary};
    grid-column: full-start / full-end;
    padding: 8rem;
`

export class Footer extends Component {
    render() {
        return (
            <>
                <FooterWrapper>
                    <NavFooter/>
                    <Copyright/>
                </FooterWrapper>

            </>
        )
    }
}

export default Footer
