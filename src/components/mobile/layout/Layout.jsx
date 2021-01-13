import React from "react"
import Header from "../../_shared/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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

export default Layout
