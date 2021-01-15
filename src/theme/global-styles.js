import { createGlobalStyle } from 'styled-components'
import reset from './reset.css'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.primary};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    
  }
  .icon-aboutme {
    fill: ${({ theme }) => theme.color.secondary};
  }
`
