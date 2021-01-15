import React, { useEffect, useState } from "react"
import { withTheme } from "styled-components"
import CustomText from "../../components/_shared/customText/CustomText"
import CustomTitle from '../../components/_shared/customTitle/CustomTitle'
import { GridContainer, IconContainer } from "./styles"
import Icon from '../../components/_shared/customIcon/CustomIcon'
import Image from './Image'

const DesktopAboutMe = ({ theme }) => {
  const [title, setTitle] = useState('')
  const [texts, setTexts] = useState({})

  useEffect(() => {
    setTitle(theme.lang.title.aboutme)
    setTexts(theme.lang.text.aboutme)
  }, [theme])


  return (
    <GridContainer>
      <CustomTitle gridArea={'title'} text={title} />
      <CustomText gridArea={'primary'} text={texts.primary} />
      <CustomText gridArea={'secondary'} text={texts.secondary} />
      <CustomText gridArea={'tetriary'} text={texts.tetriary} />
      <CustomText gridArea={'quaternary'} text={texts.quaternary} />
      <IconContainer gridArea={'icons'}>
        <Icon name={'linkedIn'} isLink={true} link={'https://www.linkedin.com/in/grzegorz-otto/'} />
        <Icon name={'gitlab'} isLink={true} link={'https://gitlab.com/grzott'} />
      </IconContainer>
      <Image gridArea={'img'} />
    </GridContainer>

  )
}

export default withTheme(DesktopAboutMe)

