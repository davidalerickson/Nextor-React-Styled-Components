import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../styles/mainStyles'

const NavItemWrapper = styled.ul`
    list-style: none;
    .nav__link,
    .nav__link:visited{
        font-size: 1.4rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-family: ${fonts.Display};
        text-align: center;
        /* display block to allow padding */
        display: block;
        padding: 1.5rem;
        transition: all .3s;

        
    }
    .nav__link:hover,
    .nav__link:active{
        background-color: ${colors.SecondaryLight10};
        transform: translateY(-3px);
    }
`

export class NavItem extends Component {
    render() {
        return (
            <NavItemWrapper>
                    <li className="nav__item">
                    {/* eslint-disable-next-line */}
                        <a href="#" className="nav__link">{this.props.linkText}</a>
                    </li>
            </NavItemWrapper>
        )
    }
}

export default NavItem
