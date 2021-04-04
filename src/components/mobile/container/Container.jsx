import React from "react"
import styled, { withTheme } from "styled-components"

const MContainer = styled.div`
  max-width: 92%;
  margin: 0 20px;
  padding: 60px 0 40px 0;
`

const MobileContainer = ({ children, theme }) => {
  return <MContainer>{children}</MContainer>
}

export default withTheme(MobileContainer)
