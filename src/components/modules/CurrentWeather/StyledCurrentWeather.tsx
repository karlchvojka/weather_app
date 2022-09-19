// Library Imports
import styled from 'styled-components'
import { mediaQueries } from 'globalConfig/mobile'

// Variable Imports
import { lightBlue } from 'globalConfig/css_vars'

const StyledCurrentWeather = styled.section`
/* MOBILE FIRST DEFAULT STYLES */
  
  .currentWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
      "weatherIco currentTemp"
      "weatherDetails weatherDetails";
    grid-column-gap: 20px;
    margin-top: 20px;

    .weatherIco {
      grid-area: weatherIco;
      height: 150px;
      svg {
        color: ${lightBlue};
        display: block;
        height: 150px;
        margin: 0 auto;
        width: auto;
      }
    }

    .tempDetails {
      grid-area: currentTemp;
      height: 150px;

      h3, p {
        text-align: center;
      }

      h3 {
        font-size: 70px;
        margin-bottom: 20px;
      }

      p {
        color: ${lightBlue};
        font-size: 20px;
        margin-bottom: 10px;
        text-transform: uppercase;

        span {
          font-weight: bold;
        }
      }
    }

    .weatherDetails {
      display: grid;
      grid-area: weatherDetails;
      grid-template-columns: 1fr 1fr;
      height: 150px;

      p {
        color: ${lightBlue};
        font-size: 20px;
        line-height: 44px;
        margin-bottom: 10px;
        text-align: center;
        text-transform: uppercase;

        span {
          font-weight: bold;
        }
      }
    }
  }

/* Min width of 1024 */
  ${mediaQueries('desktop') `
    .currentWrap {
      grid-template-columns: 150px 1fr 2fr;
      grid-template-areas: "weatherIco currentTemp weatherDetails";

      .weatherDetails {

        p {
          text-align: left;
        }
      }
    }
  `}
`

export default StyledCurrentWeather
