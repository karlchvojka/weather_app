// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// CSS Imports
import GlobalFonts from  'globalAssets/fonts/fonts'
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <h1>Welcome to the Weather App</h1>
    </StyledApp>
  )
}

export default App
