// Framework Imports
import React from 'react'

// CSS Imports
import StyledFutureWeather from './StyledFutureWeather'

// Component Imports
import DayItem from 'modules/DayItem/DayItem'

// Type Declarations
interface FutureWeatherProps {
  dailyWeather: Array<dayItem>;
}

interface dayItem {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: Array<weatherItem>;
}

interface weatherItem {
  description: string;
}
/**
 * This the Future Weather component.
 */
const FutureWeather = ({dailyWeather}: FutureWeatherProps) => {
  return (
    <StyledFutureWeather>
      {
        dailyWeather.slice(1, 8).map((day: dayItem, index) => {
          return <DayItem day={day} key={index} />
        })
      }
    </StyledFutureWeather>
  )
}

export default FutureWeather
