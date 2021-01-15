import React from "react"
import { isMobile } from "react-device-detect"
import DesktopProjects from "../views/projects/DesktopProjects"
import MobileProjects from "../views/projects/MobileProjects"

const ProjectsPage = () => {
  if (isMobile) {
    return <MobileProjects />
  }
  return <DesktopProjects />
}

export default ProjectsPage