// Library Imports
import styled from 'styled-components'

// Variable Imports
import { darkGrey, white } from 'globalConfig/css_vars'

const StyledHeader = styled.section`
/* MOBILE FIRST DEFAULT STYLES */
  background-color: ${darkGrey};
  -webkit-box-shadow: 0px 7px 5px -1px rgba(0,171,223,0.58); 
  box-shadow: 0px 7px 5px -1px rgba(0,171,223,0.58);
  color: ${white};
  margin-bottom: 20px;
  padding: 20px;
  width: calc(100% - 40px);

  h1 {
    font-size: 24px;
    text-transform: uppercase;
  }
`

export default StyledHeader
