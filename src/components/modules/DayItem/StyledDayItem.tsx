// Library Imports
import styled from 'styled-components'
import { mediaQueries } from 'globalConfig/mobile'

// CSS Imports
import { lightBlue } from 'globalConfig/css_vars'

const StyledDayItem = styled.section`
/* MOBILE FIRST DEFAULT STYLES */

  .date {
    color: ${lightBlue};
    text-align: center;
  }

  svg {
    color: ${lightBlue};
    display: block;
    height: 110px;
    margin: 0 auto 10px auto;
    width: auto;
  }

  p {
    color: ${lightBlue};
    margin-bottom: 10px;
    text-align: center;
    text-transform: uppercase;

    span {
      font-weight: bold;
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

export default StyledDayItem
