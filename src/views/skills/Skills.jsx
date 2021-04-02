import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"
import CustomText from "../../components/_shared/customText/CustomText"
import { GridContainer } from "./styles"
import SkillsIconsContainer from "../../components/_shared/skillsIconsContainer/SkillsIconsContainer"

const Skills = ({ theme }) => {
  const [title, setTitle] = useState("")
  const [texts, setTexts] = useState({})

  useEffect(() => {
    setTitle(theme.title.skills)
    setTexts(theme.text.skills)
  }, [theme])

  return (
    <GridContainer>
      <CustomTitle gridArea={"title"} text={title} />
      <CustomText gridArea={"primary"} text={texts.primary} />
      <CustomText gridArea={"secondary"} text={texts.secondary} />
      <CustomText gridArea={"tetriary"} text={texts.tetriary} />
      <CustomText gridArea={"quaternary"} text={texts.quaternary} />
      <SkillsIconsContainer />
    </GridContainer>
  )
}

export default withTheme(Skills)
