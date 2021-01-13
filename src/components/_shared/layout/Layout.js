import React from "react"
import { isMobile, isBrowser } from "react-device-detect"
import "./reset.css"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import DesktopLayout from "../../desktop/layout/Layout"
import MobileLayout from "../../mobile/layout/Layout"

const Layout = ({ children, path }) => {
  if (isMobile)
    return (
      <ThemeProvider theme={theme}>
        <MobileLayout>{children}</MobileLayout>
      </ThemeProvider>
    )
  return (
    <ThemeProvider theme={theme}>
      <DesktopLayout>{children}</DesktopLayout>
    </ThemeProvider>
  )
}


export default Layout
