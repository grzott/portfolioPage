import React, { useEffect } from "react"
import { withTheme } from "styled-components"
import CustomText from "../../components/_shared/customText/CustomText"
import CustomTitle from '../../components/_shared/customTitle/CustomTitle'
import { GridContainer, IconContainer } from "./styles"
import Icon from '../../components/_shared/customIcon/CustomIcon'
import Image from './Image'

const DesktopAboutMe = ({ theme }) => {

  useEffect(() => {
    console.log('ok')
    console.log('theme: ', theme)
  }, [])
  return (
    <GridContainer>
      <CustomTitle gridArea={'title'} text={theme.lang.title.aboutme} />
      <CustomText gridArea={'primary'} text={theme.lang.text.aboutme.primary} />
      <CustomText gridArea={'secondary'} text={theme.lang.text.aboutme.secondary} />
      <CustomText gridArea={'tetriary'} text={theme.lang.text.aboutme.tetriary} />
      <CustomText gridArea={'quaternary'} text={theme.lang.text.aboutme.quaternary} />
      <IconContainer gridArea={'icons'}>
        <Icon name={'linkedIn'} isLink={true} link={'https://www.linkedin.com/in/grzegorz-otto/'} />
        <Icon name={'gitlab'} isLink={true} link={'https://gitlab.com/grzott'} />
      </IconContainer>
      <Image gridArea={'img'} />
    </GridContainer>

  )
}

export default withTheme(DesktopAboutMe)

