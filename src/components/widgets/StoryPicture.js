import React from 'react'
import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/mainStyles'

const StoryPictureWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    background-image:  linear-gradient(rgba(${colors.PrimaryRGB}, 0.5), rgba(${colors.PrimaryRGB},0.5)), url(img/back.jpg);
    @media only screen and (max-width: ${breakpoints.bp800}){
            grid-column: 1 / -1;
            grid-template-columns: 8rem repeat(5, 1fr);
            grid-template-rows: 8rem repeat(4, 1fr) 5rem;
            background-size: cover;
        }

    .story__img--1{
        width: 100%;
        grid-row: 2 / 6;
        grid-column: 2 / 6;
        box-shadow: 0 2rem 5rem rgba(0,0,0, .1);
        @media only screen and (max-width: ${breakpoints.bp800}){
            grid-row: 2 / 5;
            grid-column: 2 / 5;
        }
    }
    .story__img--2{
        /* width and zindex to overlap photo to right */
        width: 165%;
        z-index: 20;
        grid-row: 3 / 7;
        grid-column: 4 / 6;
        box-shadow: 0 2rem 5rem rgba(0,0,0, .3);
        @media only screen and (max-width: ${breakpoints.bp800}){
            width: 125%;
        }
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
