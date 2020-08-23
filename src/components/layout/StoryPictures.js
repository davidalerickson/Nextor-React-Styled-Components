import React, { Component } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../styles/mainStyles'

import StoryPicture from '../widgets/StoryPicture'

const StoryPicturesWrapper = styled.div`

    grid-column: full-start / col-end 4;
    @media only screen and (max-width: ${breakpoints.bp800}){
        grid-column: 1 / -1;
    }
`

export class StoryPictures extends Component {
    render() {
        return (
            <StoryPicturesWrapper>
                <StoryPicture
                    imageSrc01="img/story-1.jpeg"
                    alt01="Couple with new house"
                    imageSrc02="img/story-2.jpeg"
                    alt02="New House"
                    />
            </StoryPicturesWrapper>
        )
    }
}

export default StoryPictures
