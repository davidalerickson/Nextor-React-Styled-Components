import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const HeaderAsSeenOnWrapper = styled.div`
    img{
        max-height: 2.5rem;
        max-width: 100%;
        filter: brightness(70%);

    }
    .header__seenon--logos{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 3rem;
            justify-items: center;
            align-items: center;

        }
        .header__seenon--text{
            font-size: 1.6rem;
            color: ${colors.GreyLight02};
            display: grid;
            grid-template-columns: 1fr max-content 1fr;
            grid-column-gap: 1.5rem;
            align-items: center;
            padding-bottom: 1.5rem;

            &::before,
            &::after{
                content: "";
                display: block;
                height: 1px;
                background-color: currentColor; 
            }
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
