import React from "react"
import { isMobile } from "react-device-detect"
import DesktopSkills from "../views/skills/DesktopSkills"
import MobileSkills from "../views/skills/MobileSkills"

const SkillsPage = () => {
  if (isMobile) {
    return <MobileSkills />
  }
  return <DesktopSkills />
}

export default SkillsPage