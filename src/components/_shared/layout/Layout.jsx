import React from "react"
import MobileLayout from "../../mobile/layout/Layout"
import DesktopLayout from "../../desktop/layout/Layout"
import { isMobile } from "react-device-detect"
import { GlobalStyle } from "../../../theme/global-styles"
import { withTheme } from "styled-components"

const Layout = withTheme(({ children }) => {
  if (isMobile)
    return (
      <>
        <GlobalStyle />
        <MobileLayout>{children}</MobileLayout>
      </>
    )

  return (
    <>
      <GlobalStyle />
      <DesktopLayout>{children}</DesktopLayout>
    </>
  )
})

export default Layout
