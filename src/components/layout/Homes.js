import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

import HomeCard from '../widgets/HomeCard'

const HomesWrapper = styled.section`
    margin: 15rem 0;
    grid-column: center-start / center-end;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 7rem;
`

export class Homes extends Component {
    render() {
        return (
            <HomesWrapper>
                <HomeCard
                    imgSrc="img/house-1.jpeg"
                    altTag="Picture of House-1"
                    homeName="Decorator Friendly House"
                    location="USA"
                    rooms="5 rooms"
                    area="325m"
                    price="$1,200,000"
                />
                <HomeCard
                    imgSrc="img/house-2.jpeg"
                    altTag="Picture of House-2"
                    homeName="Modern Glass Villa"
                    location="USA"
                    rooms="6 rooms"
                    area="450m"
                    price="$2,750,000"
                />
                <HomeCard
                    imgSrc="img/house-3.jpeg"
                    altTag="Picture of House-3"
                    homeName="Cosy Country House"
                    location="UK"
                    rooms="4 rooms"
                    area="250m"
                    price="$850,000"
                />
                <HomeCard
                    imgSrc="img/house-4.jpeg"
                    altTag="Picture of House-4"
                    homeName="Large Country Villa"
                    location="Portugal"
                    rooms="6rooms"
                    area="480m"
                    price="$1,950,000"
                />
                <HomeCard
                    imgSrc="img/house-5.jpeg"
                    altTag="Picture of House-5"
                    homeName="Majestic Mansion"
                    location="Germany"
                    rooms="18 rooms"
                    area="4230m"
                    price="9,500,000"
                />
                <HomeCard
                    imgSrc="img/house-6.jpeg"
                    altTag="Picture of House-6"
                    homeName="Modern Family Apartment"
                    location="Italy"
                    rooms="3 rooms"
                    area="180m"
                    price="$600,000"
                />

            </HomesWrapper>
        )
    }
}

export default Homes