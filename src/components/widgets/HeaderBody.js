import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../styles/mainStyles'

const HeaderBodyWrapper = styled.div`
    font-family: ${fonts.Display};
    font-weight: 400;
    display: grid;
    grid-template-rows: min-content min-content 1fr;
    grid-row-gap: 1.5rem;

    .heading-1{
        font-size: 4.5rem;
        color: ${colors.GreyLight01};
        line-height: 1;
        text-transform: uppercase;
    }
    .heading-3{
        font-size: 1.6rem;
        color: ${colors.Primary};
        text-transform: uppercase;
    }
    .btn{
        background-color: ${colors.Primary};
        border: none;
        border-radius: 0;
        font-family: ${fonts.Display};
        font-size: 1.5rem;
        color: white;
        text-transform: uppercase;
        padding: 1.8rem 3rem;
        cursor: pointer;
        transition: all .2s;
        align-self: flex-start;
        justify-self: start;
        &:hover{
                background-color: ${colors.PrimaryDark};
        }
    }
`

const HeaderBody = () => {
    return (
        <HeaderBodyWrapper>
            <h3 className="heading-3">Your own home:</h3>
            <h1 className="heading-1">The Ultimate Personal Freedom</h1>
            <button className="btn">View our Proporties</button>
        </HeaderBodyWrapper>
    )
}

export default HeaderBody
