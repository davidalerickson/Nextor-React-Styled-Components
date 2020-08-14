import React, { Component } from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/mainStyles'

const GalleryWrapper = styled.section`
    background-color: ${colors.GreyDark01};
    grid-column: full-start / full-end;
`

export class Gallery extends Component {
    render() {
        return (
            <GalleryWrapper>
                {this.props.children}
            </GalleryWrapper>
        )
    }
}

export default Gallery
