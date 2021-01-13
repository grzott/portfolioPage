import React from "react"

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

export default Layout
