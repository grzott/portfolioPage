import React from "react"
import { withTheme } from "styled-components"
import Container from "../container/Container"
import Header from "../header/Header"
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
  return (
    <div style={{
      width: '100%', height: '100%'
    }}>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  )
}

export default withTheme(Layout)
