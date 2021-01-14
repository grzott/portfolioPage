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
    font-family: 'Roboto, sans-serif';
    font-size: 16px;
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    display: flex;
    justify-content: center;
  }
`

//${({ theme }) => theme.backgroundColor.primary}