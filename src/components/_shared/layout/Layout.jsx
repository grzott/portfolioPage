import React from "react"
import { isMobile } from "react-device-detect"
import { GlobalStyle } from "../../../theme/global-styles"
import { withTheme } from "styled-components"
import DesktopContainer from "../../desktop/container/Container"
import MobileContainer from "../../mobile/container/Container"
import DesktopHeader from "../../desktop/header/Header"
import MobileHeader from "../../mobile/header/Header"
import Footer from "../../_shared/footer/Footer"

const Layout = withTheme(({ children }) => {
  if (isMobile)
    return (
      <>
        <GlobalStyle />
        <MobileContainer>
          {children}
          <MobileHeader />
          <Footer />
        </MobileContainer>
      </>
    )

  return (
    <>
      <GlobalStyle />
      <DesktopContainer>
        {children}
        <DesktopHeader />
        <Footer />
      </DesktopContainer>
    </>
  )
})

export default Layout
