// Library Imports
import styled from 'styled-components'

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
`

export default StyledDayItem
