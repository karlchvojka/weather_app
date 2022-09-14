// Library Imports
import axios from 'axios'

export const FetchWeather = async (lat, long) => {
  const result = await axios(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
  )
  // Set Weather info into state, set selected date.
  return result
}
