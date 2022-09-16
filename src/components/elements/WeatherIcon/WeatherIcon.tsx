import React from 'react'

// Component required Imports
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDayHaze,
  WiDayRain,
  WiDaySnow,
  WiDaySunny,
  WiDayThunderstorm,
  WiNightClear,
  WiNightCloudy,
  WiNightFog,
  WiNightRain,
  WiNightSnow,
  WiNightThunderstorm,
  WiRain
} from 'react-icons/wi'

// Helper Functions Imports
import { IsNight } from 'helpers/IsNight.js'

// Types Declarations
interface WeatherIconProps {
  current: string;
}

const WeatherIco = ({ current }: WeatherIconProps ) => {

  // Variable Declarations
  const night = IsNight()

  if (current === 'clear sky' && night === false) {
    return <WiDaySunny />
  } else if (current === 'clear sky' && night === true) {
    return <WiNightClear />
  } else if (current === 'few clouds' && night === false) {
    return <WiDayCloudy />
  } else if (current === 'few clouds' && night === true) {
    return <WiNightCloudy />
  } else if (current === 'scattered clouds') {
    return <WiCloud />
  } else if (current === 'broken clouds' ) {
    return <WiCloudy />
  } else if (current.includes('cloud') ) {
    return <WiCloudy />
  } else if (current.includes('thunderstorm') && night === false) {
    return <WiDayThunderstorm />
  } else if (current.includes('thunderstorm') && night === true) {
    return <WiNightThunderstorm />
  } else if (current === 'shower rain' ) {
    return <WiRain />
  } else if (current.includes('rain') && night === false) {
    return <WiDayRain />
  } else if (current.includes('rain') && night === true) {
    return <WiNightRain />
  } else if (current === 'snow' && night === false) {
    return <WiDaySnow />
  } else if (current === 'snow' && night === true) {
    return <WiNightSnow />
  } else if (current === 'light snow' && night === false) {
    return <WiDaySnow />
  } else if (current === 'light snow' && night === true) {
    return <WiNightSnow />
  } else if (current === 'mist' && night === false) {
    return <WiDayHaze />
  } else if (current === 'mist' && night === true) {
    return <WiNightFog />
  }

  return null

}

export default WeatherIco
