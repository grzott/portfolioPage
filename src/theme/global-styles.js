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
    font-size: ${({ theme }) => theme.size.base};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${({ theme }) => theme.backgroundColor.primary};
    transition: background-color 0.9s ease;
  }
  .activeLang {
    color: ${({ theme }) => theme.color.focused};
  }

  .icon-link {
    fill: ${({ theme }) => theme.color.secondary};
    &:hover {
      fill: ${({ theme }) => theme.color.focused};
    }
  }

  .icon-link-www {
    color: ${({ theme }) => theme.color.secondary};
    &:hover {
      color: ${({ theme }) => theme.color.focused};
    }
  }

`
