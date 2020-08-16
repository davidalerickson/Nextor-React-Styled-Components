import React from 'react'
import styled from 'styled-components'
import { colors, fonts } from '../../styles/mainStyles'

const FeatureWrapper = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    /* align-items: start; */
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;


    svg {
        fill: ${colors.Primary};
        width: 4.5rem;
        height: 4.5rem;
        /* transform: translateY(-1rem); */
    }
    .iconDiv{
        grid-row: 1 / span 2;
    }
    .feature-title{
        font-family: ${fonts.Display};
        font-weight: 400;
        font-size: 1.9rem;
        color: ${colors.GreyDark01};
    }
    .feature-text{
        font-size: 1.7rem;
    }
`
const Feature = ({ iconPath, featureTitle, featureText }) => {
    return (
        <FeatureWrapper>
                    <div className="iconDiv">
                        <svg> 
                            <use xlinkHref={iconPath} />
                        </svg>
                    </div>
                    <div className="feature-title">{featureTitle}</div>
                    <div className="feature-text">{featureText}</div>
        </FeatureWrapper>
    )
}

export default Feature
