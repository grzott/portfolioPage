import React from "react"
import { isMobile } from "react-device-detect"
import DesktopContact from "../views/contact/DesktopContact"
import MobileContact from "../views/contact/MobileContact"

const ContactPage = () => {
  if (isMobile) {
    return <MobileContact />
  }
  return <DesktopContact />
}

export default ContactPage