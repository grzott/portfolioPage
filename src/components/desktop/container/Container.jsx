import React from "react"
import styled, { withTheme } from "styled-components"

const DContainer = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  padding: 80px 0;
`

const DesktopContainer = ({ children, theme }) => {
  return <DContainer>{children}</DContainer>
}

export default withTheme(DesktopContainer)
