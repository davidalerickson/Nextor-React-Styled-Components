import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const StoryPicturesWrapper = styled.div`
    background-color: ${colors.Primary};
    grid-column: col-start 5 / full-end;
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
