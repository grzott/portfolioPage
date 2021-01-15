import React from "react"
import { withTheme } from "styled-components"
import Container from "../container/Container"
import Header from "../header/Header"
import Footer from '../footer/Footer'

const Layout = ({ children }) => {
  return (
    <Container>
      {children}
      <Header />
      <Footer />
    </Container>
  )
}

export default withTheme(Layout)
