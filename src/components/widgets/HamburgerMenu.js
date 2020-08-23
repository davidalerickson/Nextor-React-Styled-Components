import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../styles/mainStyles'

const HamburgerMenuWrapper = styled.button`
    border: none;
    border-radius: 0;
    margin-top: 4rem;

    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    @media only screen and (max-width: ${breakpoints.bp1000}){
        margin-top: 0;
        margin-right: 3rem;
        &::before{ transform: translateY(-1.2rem); }
        &::after{ transform: translateY(1.1rem); }
    }

    &::after,
    &::before{
        background-color: #fff;
        height: 2px;
        width: 4.5rem;
        content: "";
        display: block;
    }

    &::before{ transform: translateY(-1.5rem); }

    &::after{ transform: translateY(1.3rem); }
`

const HamburgerMenu = () => {
    return (
        <HamburgerMenuWrapper />
    )
}

export default HamburgerMenu 
