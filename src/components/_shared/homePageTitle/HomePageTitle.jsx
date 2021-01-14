import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  color: ${({ theme }) => theme.backgroundColor.secondary};
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 400px;
  font-weight: ${({ theme }) => theme.fontStyle.bold};
  text-align: center;
  position: relative;
  padding-top: 100px;
`

const HomePageTitle = () => {
  return <Title>Hello</Title>
}

export default HomePageTitle
