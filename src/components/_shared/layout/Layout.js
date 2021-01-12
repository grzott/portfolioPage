import React, { useState, useEffect } from "react"
import { isMobile, isBrowser } from "react-device-detect"
import DesktopLayout from "src/components/desktop/_layout/Layout"
import MobileLayout from "src/components/mobile/_layout/Layout"
import RODOBoxDesktop from "src/components/desktop/rodoBox/rodoBox"
import RODOBoxMobile from "src/components/mobile/rodoBox/rodoBox"
import "./reset.css"
import "./globals.css"
import {
  getUserNotificationStatus,
  setUserNotificationStatus,
} from "../../../utils"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Plugins } from "@capacitor/core"
const { Device } = Plugins

const Layout = ({ children, path }) => {
  const [deviceInfo, setDeviceInfo] = useState()
  const [isApp, setApp] = useState(false)

  useEffect(() => {
    if (window && window.apptest) setApp(true)
  }, [])

  useEffect(() => {
    if (!getUserNotificationStatus()) {
      setUserNotificationStatus(false)
    }

    const getDeviceInfo = async () => {
      let info = await Device.getInfo()
      setDeviceInfo(info)
    }
    getDeviceInfo()
  }, [])
  //CHANGE TO !==
  if (deviceInfo) {
    if (window.apptest || deviceInfo.platform !== "web")
      return <ThemeProvider theme={theme}>{children}</ThemeProvider>
    if (typeof window !== "undefined") {
      if (isMobile)
        return (
          <ThemeProvider theme={theme}>
            <RODOBoxMobile />
            <MobileLayout path={path}>{children}</MobileLayout>
          </ThemeProvider>
        )
      if (isBrowser) {
        return (
          <ThemeProvider theme={theme}>
            <RODOBoxDesktop />
            <DesktopLayout>{children}</DesktopLayout>
          </ThemeProvider>
        )
      }
    }
  }
  return <></>
}

export default Layout
