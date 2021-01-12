import React, { useState, useEffect } from "react"
import { isMobile, isBrowser } from "react-device-detect"


const Layout = ({ children, path }) => {

  //CHANGE TO !==
  if (isMobile)
    return (
      <ThemeProvider theme={theme}>
        <MobileLayout path={path}>{children}</MobileLayout>
      </ThemeProvider>
    )
  if (isBrowser) {
    return (
      <ThemeProvider theme={theme}>
        <DesktopLayout>{children}</DesktopLayout>
      </ThemeProvider>
    )
  }


  return <></>

  export default Layout
