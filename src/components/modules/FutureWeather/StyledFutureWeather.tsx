// Library Imports
import styled from 'styled-components'
import { mediaQueries } from 'globalConfig/mobile'

// Variable Imports
import { lightBlue } from 'globalConfig/css_vars'

const StyledFutureWeather = styled.section`
/* MOBILE FIRST DEFAULT STYLES */
  border-top: 1px solid ${lightBlue};
  column-gap: 10px;
  display:grid;
  grid-template-columns: repeat(7, 1fr);
  padding-top: 20px;
  width: 100%;

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

export default StyledFutureWeather
