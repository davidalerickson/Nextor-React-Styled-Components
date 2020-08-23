import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/mainStyles'

import RealtorsContent from '../widgets/RealtorsContent'

const RealtorsWrapper = styled.div`
    background-color: ${colors.Secondary};
    grid-column: col-start 7 / full-end;

    display: grid;
    align-content: center;
    justify-content: center;
    @media only screen and (max-width: ${breakpoints.bp800}){
        grid-column: 1 / -1;
      }
`

export class Realtors extends Component {
    render() {
        return (
            <RealtorsWrapper>
                <RealtorsContent/>
            </RealtorsWrapper>
        )
    }
}

export default Realtors
