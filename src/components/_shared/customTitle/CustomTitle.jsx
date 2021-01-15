import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.fontStyle.bold};
  grid-area: ${props => props.gridArea};
  padding: 0.25em;
`

const CustomTitle = ({ text, gridArea }) => {
  return <Title gridArea={gridArea}>{text}</Title>
}

export default CustomTitle
