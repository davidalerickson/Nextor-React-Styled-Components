import React from 'react'
import styled from 'styled-components'

const HeaderLogoWrapper = styled.div`
    justify-self: center;
    img{
        height: 3.5rem;
    }
`


const HeaderLogo = () => {
    return (
        <HeaderLogoWrapper>
            {/* eslint-disable-next-line */}
            <img src="img/logo.png"></img>
        </HeaderLogoWrapper>
    )
}

export default HeaderLogo
