// Library Imports
import { createGlobalStyle } from 'styled-components'

// Asset Imports
import MonserratReg from 'globalAssets/fonts/Montserrat/static/Montserrat-Regular.ttf'
import MonserratBold from 'globalAssets/fonts/Montserrat/static/Montserrat-Bold.ttf'
import RobotoCond from 'globalAssets/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf'

/**
 * Global Font styles
 * This is to abstract out the font imports.
 * EG:
 * @font-face {
    font-family: <font-name>;
    src: url(<Link to file>) format(<File format>);
  }
 */
export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MonserratReg}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratBold';
    src: url(${MonserratBold}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto-Condensed';
    src: url(${RobotoCond}) format('truetype');
  }
  
`
