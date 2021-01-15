import React from "react"
import styled from "styled-components"

const Text = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.regular};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
  grid-area: ${props => props.gridArea}
`

const CustomText = ({ text, gridArea }) => {
  return <Text gridArea={gridArea}>{text}</Text>
}

export default CustomText
