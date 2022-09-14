// Framework Imports
import React, { useState, useEffect} from 'react'

// Library Imports
import Header from 'modules/Header/Header'
import { GetPosition } from 'helpers/getPosition'
import { FetchWeather } from 'helpers/api'

// CSS Imports
import GlobalFonts from  'globalAssets/fonts/fonts'
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import StyledApp from './StyledApp'

// Type Declarations
interface WeatherItem {
  description?: string
}

interface weather {
  current?: {
    weather?: Array<WeatherItem>
  }
}

const App = () => {
  // State Declarations
  const [pos, setPos] = useState([])
  const [weather, setWeather] = useState<weather>({})

  // UseEffect to handle getting position and setting pos state.
  useEffect(() => {
    GetPosition(setPos)
  }, [])

  // UseEffect to watch state and refresh on change.
  useEffect(() => {
    pos.length && FetchWeather(pos[0], pos[1]).then(response => {
      setWeather(response.data)
    })
  }, [pos])

  return (
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <h1>Welcome to the Weather App</h1>
      {
        Object.keys(weather).length > 0 ?
          <p>{weather.current.weather[0].description}</p>
          :
          <p>Loading</p>
      }
    </StyledApp>
  )
}

export default App
