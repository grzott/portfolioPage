import React from "react"
import styled, { withTheme } from "styled-components"
import { isMobile } from "react-device-detect"

const Title = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.fontStyle.bold};
  grid-area: ${props => props.gridArea};
  line-height: 30px;
  letter-spacing: 0.1em;
  padding: ${isMobile ? "0 0 20px 0" : ""};
`

const CustomTitle = ({ text, gridArea }) => {
  return <Title gridArea={gridArea}>{text}</Title>
}

export default withTheme(CustomTitle)
