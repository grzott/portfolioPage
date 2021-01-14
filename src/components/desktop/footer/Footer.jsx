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
`
const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;

`

const Footer = ({ theme }) => {
  return (
    <Container>
      <Text>{theme.lang.eng.footer.text}</Text>
    </Container>
  )
}

export default withTheme(Footer)
