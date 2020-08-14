import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const StoryContentWrapper = styled.div`
    background-color: ${colors.GreyLight01};
    grid-column: full-start / col-end 4
`

export class StoryContent extends Component {
    render() {
        return (
            <StoryContentWrapper>
                {this.props.children}
            </StoryContentWrapper>
        )
    }
}

export default StoryContent
