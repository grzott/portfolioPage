import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  color: ${({ theme }) => theme.backgroundColor.secondary};
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 400px;
  font-weight: ${({ theme }) => theme.fontStyle.black};
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: 0.9s ease
`

const HomePageTitle = () => {
  return <Title>Hello</Title>
}

export default HomePageTitle
