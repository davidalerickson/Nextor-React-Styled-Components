import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const HeaderAsSeenOnWrapper = styled.div`
    img{
        height: 2.5rem;
    }
`

const HeaderAsSeenOn = () => {
    return (
        <HeaderAsSeenOnWrapper>
            <div className="header__seenon--text">Seen on</div>
            <div className="header__seenon--logos">
                <img src="img/logo-bbc.png" alt="Seen on logo 1" />
                <img src="img/logo-forbes.png" alt="Seen on logo 2" />
                <img src="img/logo-techcrunch.png" alt="Seen on logo 3" />
                <img src="img/logo-bi.png" alt="Seen on logo 4" />
            </div>

        </HeaderAsSeenOnWrapper>
    )
}

export default HeaderAsSeenOn
