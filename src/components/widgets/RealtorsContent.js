import React from 'react'
import styled from 'styled-components'
import { colors, fonts, breakpoints } from '../../styles/mainStyles'

const RealtorsContentWrapper = styled.div`
    padding: 3rem;


    .heading-3{
        font-style: ${fonts.Display};
        font-size: 1.6rem;
        color: ${colors.Primary};
        text-transform: uppercase;
        padding-bottom: 1.5rem;
        text-align: center;
    }

    .realtors__list{
        display: grid;
        grid-template-columns: min-content max-content;
        grid-column-gap: 2rem;
        grid-row-gap: 5vh;
        align-items: center;
        @media only screen and (max-width: ${breakpoints.bp800}){
            grid-template-columns: repeat(3, min-content max-content);
        }
        @media only screen and (max-width: ${breakpoints.bpSmall}){
            grid-template-columns: min-content max-content;
        }
    }
    .realtors__img{
        width: 7rem;
        border-radius: 50%;
        display: block;

    }

    .realtors__details{
        
    }
    .heading-4{
    font-style: ${fonts.Display};
    font-weight: 400;
    font-size: 1.9rem;
    color: ${colors.GreyLight01};
}
    }
    .realtors__sold{
        text-transform: uppercase;
        color: ${colors.GreyLight02};
        margin-top: 2px;
    }


`

const RealtorsContent = () => {
    return (
        <RealtorsContentWrapper>
            <div className="heading-3">Top 3 Realtors</div>
            <div className="realtors__list">
                <img src="img/realtor-1.jpeg" alt="Realtor 1" className="realtors__img"/>
                <div className="realtors__details">
                    <h4 className="heading-4">Erick Feinman</h4>
                    <p className="realtors__sold">245 houses sold</p>
                </div>
                <img src="img/realtor-2.jpeg" alt="Realtor 2" className="realtors__img"/>
                <div className="realtors__details">
                    <h4 className="heading-4">Kim Brown</h4>
                    <p className="realtors__sold">212 houses sold</p>
                </div>
                <img src="img/realtor-3.jpeg" alt="Realtor 3" className="realtors__img"/>
                <div className="realtors__details">
                    <h4 className="heading-4">Tony Rhansey</h4>
                    <p className="realtors__sold">198 houses sold</p>
                </div>
            </div>
        </RealtorsContentWrapper>
    )
}

export default RealtorsContent
