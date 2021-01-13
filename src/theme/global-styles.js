import { createGlobalStyle } from 'styled-components'
import reset from "../theme/reset.css"

export const theme = {
    color: {
        primary: 'black',
        secondary: 'green',
    },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}`