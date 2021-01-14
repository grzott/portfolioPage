import React from "react"
import { withTheme } from "styled-components"
import CustomTitle from '../../components/_shared/title/CustomTitle'


const MobileAboutMe = ({ theme }) => {
  return <CustomTitle text={theme.lang.eng.title.aboutme} />
}

export default withTheme(MobileAboutMe)
