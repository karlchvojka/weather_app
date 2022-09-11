// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <h1>Welcome to the Weather App</h1>
    </StyledApp>
  )
}

export default App
