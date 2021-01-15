import React from "react"
import { withTheme } from "styled-components"
import CustomText from "../../components/_shared/customText/CustomText"
import CustomTitle from '../../components/_shared/customTitle/CustomTitle'
import { GridContainer, IconContainer } from "./styles"
import Icon from '../../components/_shared/customIcon/CustomIcon'
import Image from './Image'

const DesktopAboutMe = ({ theme }) => {
  return (
    <GridContainer>
      <CustomTitle gridArea={'title'} text={theme.lang.eng.title.aboutme} />
      <CustomText gridArea={'primary'} text={theme.lang.eng.text.aboutme.primary} />
      <CustomText gridArea={'secondary'} text={theme.lang.eng.text.aboutme.secondary} />
      <CustomText gridArea={'tetriary'} text={theme.lang.eng.text.aboutme.tetriary} />
      <CustomText gridArea={'quaternary'} text={theme.lang.eng.text.aboutme.quaternary} />
      <IconContainer gridArea={'icons'}>
        <Icon name={'linkedIn'} isLink={true} link={'https://www.linkedin.com/in/grzegorz-otto/'} />
        <Icon name={'gitlab'} isLink={true} link={'https://gitlab.com/grzott'} />
      </IconContainer>
      <Image gridArea={'img'} />
    </GridContainer>

  )
}

export default withTheme(DesktopAboutMe)

