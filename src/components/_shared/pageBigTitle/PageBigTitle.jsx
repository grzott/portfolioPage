import React from "react"
import styled, {withTheme} from "styled-components"
import { isMobile } from "react-device-detect"

export const Title = styled.h1`
  color: ${({ theme }) => theme.backgroundColor.secondary};
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${isMobile ? '200px' : '400px'};
  font-weight: ${({ theme }) => theme.fontStyle.black};
  text-align: center;
  pointer-events: none;
  transition: color 0.9s ease;
  transform: ${isMobile ? 'rotate(270deg) translate(0, 0)' : ''};
`

const PageBigTitle = ({ children }) => {
  return <Title>{children}</Title>
}

export default withTheme(PageBigTitle)
