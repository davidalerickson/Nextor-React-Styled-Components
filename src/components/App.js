import React from 'react';

import { colors, fonts } from '../styles/mainStyles'
import { createGlobalStyle } from 'styled-components';

import Container from './layout/Container'
import Sidebar from './layout/SideBar'
import Header from './layout/Header'
import Realtors from './layout/Realtors'
import Features from './layout/Features'
import StoryPictures from './layout/StoryPictures'
import StoryContent from './layout/StoryContent'
import Homes from './layout/Homes'
import Gallery from './layout/Gallery'
import Footer from './layout/Footer'


const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }

  *,
  *::after,
  *::before {
      box-sizing: inherit;
  }

  html {
      box-sizing: border-box;
      font-size: 62.5%; //1rem = 10px
  }

  body {
      font-family: ${fonts.Primary};
      font-weight: 300;
      color: ${colors.GreyDark02};
      line-height: 1.6;
  } 
`

class App extends React.Component {

  render() {
    return (<>
    <Container>
      <GlobalStyles/>
      <Sidebar>Sidebar</Sidebar>
      <Header>Header</Header>
      <Realtors>Top 3 Realtors</Realtors>
      <Features>Features</Features>
      <StoryContent>Story Content</StoryContent>
      <StoryPictures>Story Pictures</StoryPictures>
      <Homes>Homes</Homes> 
      <Gallery>Gallery</Gallery>
      <Footer>Footer</Footer>
    </Container>
        
      </>

    );
  }
}

export default App;
