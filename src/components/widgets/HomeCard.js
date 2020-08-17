import React from 'react'
import styled from 'styled-components'
import { colors, fonts, bordshad } from '../../styles/mainStyles'

const HomeCardWrapper = styled.div`
    font-size: 3rem;
    background-color: ${colors.GreyLight01};
    box-shadow: ${bordshad.shadowMedium};
    .home{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 3.5rem;
        &__img{
            width: 100%;
            grid-row: 1 / 2;  
            grid-column: 1 / span 2;
            z-index: 1;
            
        }
        &__name{
            font-family: ${fonts.Display};
            grid-row: 1 / 2;
            grid-column: 1 / span 2;
            justify-self: center; 
            align-self: flex-end;
            font-size: 1.6rem;
            text-align: center;
            padding: 1.25rem; 
            width: 80%;
            transform: translateY(50%);
            background-color: ${colors.Secondary};
            color: white; 
            font-weight: 400;
            z-index: 3;
        }
        &__location,
        &__rooms{
            /* to compensate from house_name overlapping */
            margin-top: 2.5rem;
        }  

        &__location, 
        &__rooms,
        &__area,
        &__price{
            font-size: 1.5rem;
            margin-left: 2rem;
            display: flex;
            align-items: center;
            svg{
                fill: ${colors.Primary};
                height: 2rem;
                width: 2rem; 
                margin-right: 1rem;
            }
        }
        &__button{
            grid-column: 1 / span 2;
            background-color: ${colors.Primary};
            border: none;
            border-radius: 0;
            font-family: ${fonts.Display};
            font-size: 1.5rem;
            color: white;
            text-transform: uppercase;
            padding: 1.8rem 3rem;
            cursor: pointer;
            transition: all .2s;
            &:hover{
                background-color: ${colors.PrimaryDark};
            }
        }
  
    }
 
    svg.home__heart{
        fill: ${colors.Primary};
        width: 4rem;
        height: 4rem;
        margin: 1rem;
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        justify-self: end; 
        /* zindex to ensure that the heart will be on top of picture */
        z-index: 2; 
    }

    
    `

const HomeCard = ({ imgSrc, altTag, homeName, location, rooms, area, price}) => {
    return (
        <HomeCardWrapper>

            <div className="home">
                <img src={imgSrc} alt={altTag} className="home__img"/>
                <svg viewBox="0 0 32 32" className="home__heart">
                    <path d="M16.042 8.345c0 0-2-4.262-6.5-4.262-4.917 0-7.5 4.167-7.5 8.333 0 6.917 14 15.5 14 15.5s13.916-8.5 13.916-15.5c0-4.25-2.666-8.333-7.416-8.333s-6.5 4.262-6.5 4.262z"></path>
                </svg>
                <h5 className="home__name">{homeName}</h5>
                <div className="home__location">
                    <svg className="home_icon">
                        <use xlinkHref="img/SVG/sprite.svg#icon-map-pin"/>
                    </svg>
                    <p className="location">{location}</p>
                </div>
                <div className="home__rooms">
                    <svg className="home_icon">
                        <use xlinkHref="img/SVG/sprite.svg#icon-profile-male"/>
                    </svg>
                    <p className="location">{rooms}</p>
                </div>
                <div className="home__area">
                    <svg className="home_icon">
                        <use xlinkHref="img/SVG/sprite.svg#icon-expand"/>
                    </svg>
                    <p className="location">{area}</p>
                </div>
                <div className="home__price">
                    <svg className="home_icon">
                        <use xlinkHref="img/SVG/sprite.svg#icon-key"/>
                    </svg>
                    <p className="location">{price}</p>
                </div>
                <button className="btn home__button">Contact Realtor</button>
            </div>

        </HomeCardWrapper>
    )
}

export default HomeCard
