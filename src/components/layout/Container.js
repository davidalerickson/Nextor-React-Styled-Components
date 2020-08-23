import React from 'react';
import styled from 'styled-components'
import { breakpoints } from '../../styles/mainStyles'



const ContainerWrapper = styled.div`
    display: grid;
    grid-template-rows: 80vh min-content min-content repeat(3, min-content);
    grid-template-columns: [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem)[col-end] ) [center-end] minmax(6rem, 1fr) [full-end];

    @media only screen and (max-width: ${breakpoints.bp1000}){
        grid-template-rows: 6rem 80vh min-content min-content repeat(3, min-content);
        grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem)[col-end] ) [center-end] minmax(6rem, 1fr) [full-end];
      }
    @media only screen and (max-width: ${breakpoints.bp800}){
        grid-template-rows: 6rem calc(${window.innerHeight} - 6rem) min-content min-content min-content repeat(3, min-content);
      }
`;

class Container extends React.Component {

    render() {
        return (
            <ContainerWrapper
            marginTB={this.props.marginTB}
            maxWidth={this.props.maxWidth}>
                {this.props.children}
            </ContainerWrapper>
        )
        }
}

export default Container;


