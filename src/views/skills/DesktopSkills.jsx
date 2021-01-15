import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import CustomTitle from '../../components/_shared/customTitle/CustomTitle'
import CustomText from "../../components/_shared/customText/CustomText"
import { GridContainer } from "./styles"

const DesktopSkills = ({ theme }) => {
  const [title, setTitle] = useState('')
  const [texts, setTexts] = useState({})

  useEffect(() => {
    setTitle(theme.lang.title.skills)
    setTexts(theme.lang.text.skills)
  }, [theme])

  return (
    <GridContainer>
      <CustomTitle gridArea={'title'} text={title} />
      <CustomText gridArea={'primary'} text={texts.primary} />
      <CustomText gridArea={'secondary'} text={texts.secondary} />
      <CustomText gridArea={'tetriary'} text={texts.tetriary} />
      <CustomText gridArea={'quaternary'} text={texts.quaternary} />
    </GridContainer>

  )
}

export default withTheme(DesktopSkills)

