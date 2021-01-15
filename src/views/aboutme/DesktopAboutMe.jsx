import React from "react"
import { withTheme } from "styled-components"
import CustomText from "../../components/_shared/customText/CustomText"
import CustomTitle from '../../components/_shared/customTitle/CustomTitle'
import { GridContainer } from "./styles"

const DesktopAboutMe = ({ theme }) => {
  return (
    <GridContainer>
      <CustomTitle gridArea={'title'} text={theme.lang.eng.title.aboutme} />
      <CustomText gridArea={'primary'} text={theme.lang.eng.text.aboutme.primary} />
      <CustomText gridArea={'secondary'} text={theme.lang.eng.text.aboutme.secondary} />
      <CustomText gridArea={'tetriary'} text={theme.lang.eng.text.aboutme.tetriary} />
      <CustomText gridArea={'quaternary'} text={theme.lang.eng.text.aboutme.quaternary} />

    </GridContainer>

  )
}

export default withTheme(DesktopAboutMe)

