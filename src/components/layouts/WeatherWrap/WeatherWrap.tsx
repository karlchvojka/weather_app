// Framework Imports
import React from 'react'

// CSS Imports
import StyledWeatherWrap from './StyledWeatherWrap'

// Type Declarations
type Props = {
  children: React.ReactNode[];
}
/**
 * This the WeatherWrap component.
 */
const WeatherWrap = ({children}: Props) => {
  return (
    <StyledWeatherWrap>
      {children}
    </StyledWeatherWrap>
  )
}

export default WeatherWrap
