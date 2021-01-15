import React from "react"
import { withTheme } from "styled-components"
import CustomTitle from '../../components/_shared/customTitle/CustomTitle'


const MobileSkills = ({ theme }) => {
  return <CustomTitle text={theme.lang.eng.title.skills} />
}

export default withTheme(MobileSkills)
