import React from "react"
import { withTheme } from "styled-components"
import CustomTitle from '../../components/_shared/customTitle/CustomTitle'
import CustomText from "../../components/_shared/customText/CustomText"
import { GridContainer } from "./styles"

const DesktopSkills = ({ theme }) => {
  return (
    <GridContainer>
      <CustomTitle gridArea={'title'} text={theme.lang.title.skills} />
      <CustomText gridArea={'primary'} text={theme.lang.text.skills.primary} />
      <CustomText gridArea={'secondary'} text={theme.lang.text.skills.secondary} />
      <CustomText gridArea={'tetriary'} text={theme.lang.text.skills.tetriary} />
      <CustomText gridArea={'quaternary'} text={theme.lang.text.skills.quaternary} />
    </GridContainer>

  )
}

export default withTheme(DesktopSkills)

