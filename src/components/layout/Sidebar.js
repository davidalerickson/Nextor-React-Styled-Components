import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const SidebarWrapper = styled.div`
    background-color: ${colors.Primary};
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1
`

export class SideBar extends Component {
    render() {
        return (
            <SidebarWrapper>
                {this.props.children}
            </SidebarWrapper>
        )
    }
}

export default SideBar
