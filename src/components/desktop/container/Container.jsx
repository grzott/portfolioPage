import React from 'react'
import styled, { withTheme } from "styled-components"


const Container = styled.div`
max-width: 1190px;
padding-top: 100px;
margin: 0 auto;
`

const DesktopContainer = ({ children, theme }) => {
  return <Container>
    {children}
  </Container>
}

export default withTheme(DesktopContainer)
