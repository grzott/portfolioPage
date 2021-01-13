import React from "react"
import { isMobile } from "react-device-detect"
import DesktopHome from "../views/home/DesktopHome"
import MobileHome from "../views/home/MobileHome"

const IndexPage = () => {
  if (isMobile) {
    return <MobileHome />
  }
  return <DesktopHome />
}

export default IndexPage
