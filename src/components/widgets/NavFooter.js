import React, { Component } from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'


const NavFooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center;
`





export class NavFooter extends Component {
    render() {
        return (
            <NavFooterWrapper>
                    <NavItem linkText="Find your Dream Home" />
                    <NavItem linkText="Request Proposal" />
                    <NavItem linkText="Download Home Planner" />
                    <NavItem linkText="Contact Us" />
                    <NavItem linkText="Submit Your Property" />
                    <NavItem linkText="Come Work with Us" />
            </NavFooterWrapper>
        )
    }
}

export default NavFooter

