import React, { Component } from 'react'

import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

import Feature from '../widgets/Feature'

const FeaturesWrapper = styled.div`
    grid-column: center-start / center-end;

    margin: 15rem auto;
    display: grid;
    align-items: start;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 6rem;
`


export class Features extends Component {
    render() {
        return (
            <FeaturesWrapper>
                <Feature 
                    iconPath="img/SVG/sprite.svg#icon-global"
                    featureTitle="Words Best Luxury Homes"
                    featureText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
                />
                <Feature 
                    iconPath="img/SVG/sprite.svg#icon-trophy"
                    featureTitle="Only the best properties"
                    featureText="Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."
                />
                <Feature 
                    iconPath="img/SVG/sprite.svg#icon-map-pin"
                    featureTitle="All homes in top locations"
                    featureText="Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."
                />
                <Feature 
                    iconPath="img/SVG/sprite.svg#icon-key"   
                    featureTitle="New home in one week"
                    featureText="Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                />
                <Feature 
                    iconPath="img/SVG/sprite.svg#icon-presentation"
                    featureTitle="Top 1% Realtors"
                    featureText="Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus. And this and that and blah blah blah"
                />
                <Feature 
                    iconPath="img/SVG/sprite.svg#icon-lock"
                    featureTitle="Secure payments on nexter"
                    featureText="Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."
                />


            </FeaturesWrapper>
        )
    }
}

export default Features
