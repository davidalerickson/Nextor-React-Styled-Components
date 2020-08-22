import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

import HamburgerMenu from '../widgets/HamburgerMenu'

const SidebarWrapper = styled.div`
    background-color: ${colors.Primary};
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;

    display: flex;
    justify-content: center;
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
