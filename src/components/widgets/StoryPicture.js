import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const StoryPictureWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    background-image:  linear-gradient(rgba(${colors.PrimaryRGB}, 0.5), rgba(${colors.PrimaryRGB},0.5)), url(img/back.jpg);

    .story__img--1{
        width: 100%;
        grid-row: 2 / 6;
        grid-column: 2 /6;
        box-shadow: 0 2rem 5rem rgba(0,0,0, .1);
    }
    .story__img--2{
        /* width and zindex to overlap photo to right */
        width: 165%;
        z-index: 20;
        grid-row: 3 / 7;
        grid-column: 4 / 6;
        box-shadow: 0 2rem 5rem rgba(0,0,0, .3);
    }
`

const StoryPicture = ({ imageSrc01, imageSrc02, alt01, alt02 }) => {
    return (
        <StoryPictureWrapper>
            <img src={imageSrc01} alt={alt01} className="story__img--1"/>
            <img src={imageSrc02} alt={alt02} className="story__img--2"/>
        </StoryPictureWrapper>
    )
}

export default StoryPicture
