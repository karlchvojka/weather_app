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
  padding: 20px;
  width: 860px;

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

export default StyledWeatherWrap
