import { createGlobalStyle } from 'styled-components'
import fonts from '../fonts'

export default createGlobalStyle`
    @font-face {
        font-family: "Comfortaa";
        font-style: normal;
        font-weight: normal;
        src: local("Comfortaa"), url(${fonts.ComfortaaRegular}) format("ttf")
    }
`
