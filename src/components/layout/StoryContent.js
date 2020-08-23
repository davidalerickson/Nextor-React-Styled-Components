import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, fonts, breakpoints } from '../../styles/mainStyles'

const StoryContentWrapper = styled.div`
    background-color: ${colors.GreyLight01};
    grid-column: col-start 5 / full-end;
    padding: 6rem 8vw;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; */
    display: grid;
    align-content: center;
    justify-items: start;
    @media only screen and (max-width: ${breakpoints.bp800}){
        grid-column: 1 / -1;
    }

    .heading-2{
        font-family: ${fonts.Display};
        font-weight: 400;
        font-size: 4rem;
        font-style: italic;
        line-height: 1;
        margin-bottom: 3rem;
        color: ${colors.GreyDark01}
    }
    .heading-3{
        font-family: ${fonts.Display};
        font-weight: 400;
        font-size: 1.6rem;
        margin-bottom: 2rem;
        text-transform: uppercase;
        color: ${colors.Primary}
    }
    .story-text{
        font-family: ${fonts.Display};
        font-weight: 400;
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 4rem;
    }
    .btn{
        background-color: ${colors.Primary};
        border: none;
        border-radius: 0;
        font-family: ${fonts.Display};
        font-size: 1.5rem;
        text-transform: uppercase;
        padding: 1.8rem 3rem;
        cursor: pointer;
        transition: all .2s;
        &:hover{
            background-color: ${colors.PrimaryDark};
        }
    }
`

export class StoryContent extends Component {
    render() {
        return (
            <StoryContentWrapper>
                <div className="heading-3">Happy Customers</div>
                <div className="heading-2">&ldquo;The best decision of our lives&rdquo;</div>
                <p className="story-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!</p>
                <button className="btn">Find your own home</button>
            </StoryContentWrapper>
        )
    }
}

export default StoryContent
