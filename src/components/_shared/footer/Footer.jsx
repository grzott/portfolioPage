import React from "react"
import styled, { withTheme } from "styled-components"

const Text = styled.p`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
  text-align: center;
  line-height: 24px;
  padding-bottom: 20px;
  pointer-events: none;
  padding: 10px 0;
`
const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.backgroundColor.opacity};
  transition: 0.9s ease;
  z-index: 100;
`

const Footer = ({ theme }) => {
  return (
    <Container>
      <Text>{theme.footer.text}</Text>
    </Container>
  )
}

export default withTheme(Footer)
