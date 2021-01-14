import React from "react"
import { withTheme } from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div
        style={{
          paddingTop: "50px",
        }}
      >

        {children}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default withTheme(Layout)
