import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.size.big};
`

const CustomTitle = ({ text }) => {
  return <Title>{text}</Title>
}

export default CustomTitle
