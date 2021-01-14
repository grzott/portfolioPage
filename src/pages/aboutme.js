import React from "react"
import { isMobile } from "react-device-detect"
import DesktopAboutMe from "../views/aboutme/DesktopAboutMe"
import MobileAboutMe from "../views/aboutme/MobileAboutMe"

const AboutMePage = () => {
  if (isMobile) {
    return <MobileAboutMe />
  }
  return <DesktopAboutMe />
}

export default AboutMePage
