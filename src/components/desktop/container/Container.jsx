import React from 'react'
import styled, { withTheme } from "styled-components"


const Container = styled.div`
max-width: 1190px;
display: flex;
align-self: center;
justify-content: center;
align-items: center;
`

const DesktopContainer = ({ children, theme }) => {
  return <Container>
    {children}
  </Container>
}

export default withTheme(DesktopContainer)
