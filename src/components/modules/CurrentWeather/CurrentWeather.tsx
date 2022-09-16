// Framework Imports
import React from 'react'

// Library Imports
import Moment from 'react-moment'

// Component Imports
import WeatherIcon from 'elements/WeatherIcon/WeatherIcon'

// CSS Imports
import StyledCurrentWeather from './StyledCurrentWeather'

// Types Declarations
interface CurrentWeatherProps {
  currentWeather: {
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    wind_deg: number;
    wind_speed: number;
    weather: Array<weatherItem>;
  }

  dayWeather: {
    temp: {
      min: number;
      max: number;
    }
  }
}

interface weatherItem {
  description: string;
}
/**
 * This the Header component.
 */
const CurrentWeather = ({ currentWeather, dayWeather }: CurrentWeatherProps ) => {
  return (
    <StyledCurrentWeather>
      <h2>Current Weather for: <Moment format="MMM DD YYYY" unix>{currentWeather.dt}</Moment></h2>
      <section className='currentWrap'>
        <section className='weatherIco'>
          <WeatherIcon current={currentWeather.weather[0].description} />
        </section>
        <section className='tempDetails'>
          <h3>{Math.round(currentWeather.temp)}&#176;C</h3>
          <p><span>Feels Like:</span> {Math.round(currentWeather.feels_like)}&#176;C</p>
          <p><span>High: </span> {Math.round(dayWeather.temp.max)}&#176;C <span>Low: </span> {Math.round(dayWeather.temp.min)}&#176;C</p>
        </section>
        <section className='weatherDetails'>
          <section className='weatherDetailsLeft'>
            <p><span>Humidity:</span> {Math.round(currentWeather.humidity)}</p>
            <p><span>Sunrise:</span> <Moment format={'LT'} unix>{currentWeather.sunrise}</Moment></p>
            <p><span>Sunset:</span> <Moment format={'LT'} unix>{currentWeather.sunset}</Moment></p>
          </section>
          <section className='weatherDetailsRight'>
            <p><span>Pressure:</span> {Math.round(currentWeather.pressure)}</p>
            <p><span>Wind Direction:</span> {currentWeather.wind_deg}</p>
            <p><span>Wind Speed:</span> {currentWeather.wind_speed}</p>
          </section>
        </section>
      </section>
    </StyledCurrentWeather>
  )
}

export default CurrentWeather
