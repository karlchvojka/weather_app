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
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  padding-top: 20px;

  section {
    margin-bottom: 20px;
  }

/* Min width of 576 */
  ${mediaQueries('landscapePhones') `
    grid-template-columns: repeat(4, 1fr);
  `}

/* Min width of 1024 */
  ${mediaQueries('desktop') `
    grid-template-columns: repeat(7, 1fr);
    section {
      margin-bottom: 0px;
    }
  `}
`

export default StyledFutureWeather
