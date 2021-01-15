import React from "react"
import { withTheme } from "styled-components"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"

const DesktopProjects = ({ theme }) => {
  return <CustomTitle text={theme.lang.eng.title.projects} />
}

export default withTheme(DesktopProjects)

