// Library Imports
import styled from 'styled-components'
import { mediaQueries } from 'globalConfig/mobile'

// Variable Imports
import { darkGrey, white } from 'globalConfig/css_vars'

const StyledWeatherWrap = styled.section`
  /* MOBILE FIRST DEFAULT STYLES */
  background-color: ${darkGrey};
  border-radius: 10px;
  border: 1px solid #000;
  -webkit-box-shadow: 0px 0px 18px 4px rgba(0,171,223,0.48); 
  box-shadow: 0px 0px 18px 4px rgba(0,171,223,0.48);
  color: ${white};
  margin: 50px auto;
  padding: 10px;
  width: calc(95% - 20px);

  h2 {
    text-align: center;
  }

  /* Min width of 576 */
    ${mediaQueries('landscapePhones') `
      width: calc(90% - 20px);
    `}

  /* Min width of 768 */
    ${mediaQueries('tablet') `
      width: calc(70% - 20px);
      h2 {
        text-align: left;
      }
    `}

  /* Min width of 1024 */
    ${mediaQueries('desktop') `
      width: 860px;
      padding: 20px;
    `}
`

export default StyledWeatherWrap
