// Library Imports
import styled from 'styled-components'
import { mediaQueries } from 'globalConfig/mobile'

// Variable Imports
import { darkGrey, lightBlue, white } from 'globalConfig/css_vars'

const StyledCurrentWeather = styled.section`
/* MOBILE FIRST DEFAULT STYLES */
  background-color: ${darkGrey};
  border-radius: 10px;
  border: 1px solid #000;
  -webkit-box-shadow: 0px 0px 18px 4px rgba(0,171,223,0.48); 
  box-shadow: 0px 0px 18px 4px rgba(0,171,223,0.48);
  color: ${white};
  margin: 50px auto;
  padding: 20px;
  width: 860px;


  .currentWrap {
    display: grid;
    grid-template-columns: 150px 1fr 2fr;
    grid-column-gap: 20px;

    .weatherIco {
      height: 200px;
      svg {
        color: ${lightBlue};
        display: block;
        height: 180px;
        margin: 0 auto;
        width: auto;
      }
    }

    .tempDetails {
      height: 150px;
      margin-top: 35px;

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
      grid-template-columns: 1fr 1fr;
      height: 150px;
      margin-top: 35px;

      p {
        color: ${lightBlue};
        font-size: 20px;
        line-height: 44px;
        margin-bottom: 10px;
        text-transform: uppercase;

        span {
          font-weight: bold;
        }
      }
    }
  }

  /* Min width of 375 */
  ${mediaQueries('iphoneSe')`
  `}

/* Min width of 414 */
  ${mediaQueries('iphoneXr') `
    
  `}

/* Min width of 576 */
  ${mediaQueries('landscapePhones') `
    
  `}

/* Min width of 768 */
  ${mediaQueries('tablet') `
    
  `}

/* Min width of 1024 */
  ${mediaQueries('desktop') `
    
  `}

/* Min width of 1200 */
  ${mediaQueries('widescreen') `
    
  `}

/* Min width of 1980 */
  ${mediaQueries('udh') `
    
  `}
`

export default StyledCurrentWeather
