import React from 'react'
import MobileLayout from '../../mobile/layout/Layout'
import DesktopLayout from '../../desktop/layout/Layout'
import { isMobile } from "react-device-detect"

export const Layout = ({ element }) => {
  if (isMobile)
    return (

      <MobileLayout>{children}</MobileLayout>

    )
  return (

    <DesktopLayout>{children}</DesktopLayout>


  )
}
