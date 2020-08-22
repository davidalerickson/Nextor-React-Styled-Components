import React, { Component } from 'react'
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
    }
    .heading-3{
        font-size: 1.6rem;
        color: ${colors.Primary};
        text-transform: uppercase;
    }
    .btn{
        align-self: flex-start;
        justify-self: start;
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
