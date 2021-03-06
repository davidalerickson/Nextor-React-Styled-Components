import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../styles/mainStyles'

import HeaderLogo from './HeaderLogo'
import HeaderBody from './HeaderBody'
import HeaderAsSeenOn from './HeaderAsSeenOn'

const HeaderContentWrapper = styled.div`
    height: 100%;
    padding: 8rem;
    padding-top: 4rem;
    display: grid;
    grid-template-rows: 1fr 1fr 6rem;
    grid-row-gap: 1.5rem;
    grid-template-columns: minmax(min-content, max-content);
    justify-content:center;
    @media only screen and (max-width: ${breakpoints.bpSmall}){
            padding: 5rem;
        }
`

function HeaderContent() {
    return (
        <HeaderContentWrapper>
            <HeaderLogo/>
            <HeaderBody/>
            <HeaderAsSeenOn/>
        </HeaderContentWrapper>
    )
}

export default HeaderContent
