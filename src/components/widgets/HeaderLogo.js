import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const HeaderLogoWrapper = styled.div`
    justify-self: center;
    img{
        height: 3.5rem;
    }
`


const HeaderLogo = () => {
    return (
        <HeaderLogoWrapper>
            <img src="img/logo.png"></img>
        </HeaderLogoWrapper>
    )
}

export default HeaderLogo
