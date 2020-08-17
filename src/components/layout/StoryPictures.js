import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const StoryPicturesWrapper = styled.div`
    background-color: ${colors.Primary};
    grid-column: full-start / col-end 4;
`

export class StoryPictures extends Component {
    render() {
        return (
            <StoryPicturesWrapper>
                {this.props.children}
            </StoryPicturesWrapper>
        )
    }
}

export default StoryPictures
