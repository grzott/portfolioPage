import React from 'react'
import MobileLayout from '../../mobile/layout/Layout'
import DesktopLayout from '../../desktop/layout/Layout'
import { isMobile } from "react-device-detect"
import { GlobalStyle } from '../../../theme/global-styles'
import { withTheme } from 'styled-components'

const Layout = withTheme(({ children, theme }) => {
  if (isMobile)
    return (
      <>
        <GlobalStyle theme={theme} />
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
