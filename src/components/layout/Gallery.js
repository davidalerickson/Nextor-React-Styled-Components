import React, { Component } from 'react'
import styled from 'styled-components'
import GalleryGrid from '../widgets/GalleryGrid'

const GalleryWrapper = styled.section`
    grid-column: full-start / full-end;
`

export class Gallery extends Component {
    render() {
        return (
            <GalleryWrapper>
                <GalleryGrid/>
            </GalleryWrapper>
        )
    }
}

export default Gallery
