import React from "react"
import { withTheme } from "styled-components"
import Header from "../header/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: "200px",
        }}
      >
        {children}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default withTheme(Layout)
