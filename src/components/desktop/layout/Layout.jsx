import React from "react"
import Header from "../../_shared/header/Header"
import { GlobalStyle } from '../../../theme/global-styles'

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

export default Layout
