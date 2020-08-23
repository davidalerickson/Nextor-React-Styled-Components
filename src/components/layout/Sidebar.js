import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/mainStyles'

import HamburgerMenu from '../widgets/HamburgerMenu'

const SidebarWrapper = styled.div`
    background-color: ${colors.Primary};
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;

    display: flex;
    justify-content: center;

    @media only screen and (max-width: ${breakpoints.bp1000}){
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        justify-content: flex-end;
        align-items: center;
      }
`

export class SideBar extends Component {
    render() {
        return (
            <SidebarWrapper>
                <HamburgerMenu/>
            </SidebarWrapper>
        )
    }
}

export default SideBar
