import React from "react"
import styled, { withTheme } from "styled-components"

const Container = styled.div`
  max-width: 92%;
  margin: 0 auto;
  padding: 50px 0;
`

const MobileContainer = ({ children, theme }) => {
  return <Container>{children}</Container>
}

export default withTheme(MobileContainer)
