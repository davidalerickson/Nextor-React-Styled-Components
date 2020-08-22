import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const CopyrightWrapper = styled.p`
    font-size: 1.4rem;
    color: ${colors.GreyLight02};
    margin-top: 6rem;
    text-align: center;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`

export class Copyright extends Component {
    render() {
        return (
            <CopyrightWrapper>
                &copy; Copyright 2020 by Jonas Schmetdman, Feel free to use for your own purposes. This does not apply if you plan to produce your own course or tutorials based on this project. This version coded by David Erickson during the course "Advanced CSS and SASS."
            </CopyrightWrapper>
        )
    }
}

export default Copyright
