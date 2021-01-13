import React from 'react'
import MobileLayout from '../../mobile/layout/Layout'
import DesktopLayout from '../../desktop/layout/Layout'
import { isMobile } from "react-device-detect"
import { GlobalStyle } from '../../../theme/global-styles'

const Layout = ({ children }) => {
  if (isMobile)
    return (
      <MobileLayout>{children}</MobileLayout>
    )
  return (
    <DesktopLayout>{children}</DesktopLayout>
  )
}

export default Layout
