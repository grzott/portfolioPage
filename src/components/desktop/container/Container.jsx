import React from 'react'
import styled, { withTheme } from "styled-components"


const Container = styled.div`
max-width: 1190px;
margin: 0 auto;
padding: 100px 0;
`

const DesktopContainer = ({ children, theme }) => {
  return <Container>
    {children}
  </Container>
}

export default withTheme(DesktopContainer)
