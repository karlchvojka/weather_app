// Framework Imports
import React from 'react'

// Library Imports
import Moment from 'react-moment'

// Component Imports
import WeatherIcon from 'elements/WeatherIcon/WeatherIcon'

// CSS Imports
import StyledDayItem from './StyledDayItem'

// Type Declarations
interface DayItemProps {
  day: {
    dt: number;
    temp: {
      min: number;
      max: number;
    };
    weather: Array<weatherItem>;
    
  }
}

interface weatherItem {
  description: string;
}

/**
 * This the DayItem component.
 */
const DayItem = ({ day }: DayItemProps) => {
  return (
    <StyledDayItem>
      <h4 className='date'><Moment format="MMM DD" unix>{day.dt}</Moment></h4>
      <WeatherIcon current={day.weather[0].description} />
      <p><span>High: </span>{Math.round(day.temp.max)}&#176;C</p>
      <p><span>Low: </span>{Math.round(day.temp.min)}&#176;C</p>
    </StyledDayItem>
  )
}

export default DayItem
