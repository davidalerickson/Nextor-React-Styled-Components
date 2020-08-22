import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

import HeaderContent from '../widgets/HeaderContent'

const HeaderWrapper = styled.header`
    background-color: ${colors.GreyDark01};
    grid-column: full-start / col-end 6;
    background-image:  linear-gradient(rgba(${colors.SecondaryRGB}, 0.93), rgba(${colors.SecondaryRGB},0.93)), url(img/hero.jpeg);
    background-size: cover;
    background-position: center;

`

export class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <HeaderContent/>
            </HeaderWrapper>
        )
    }
}

export default Header
