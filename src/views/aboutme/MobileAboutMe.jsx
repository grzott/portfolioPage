import React, { useEffect, useState } from "react"
import { withTheme } from "styled-components"
import CustomText from "../../components/_shared/customText/CustomText"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"
import { GridContainer, IconContainer } from "./styles"
import LinkIcon from "../../components/_shared/linkIcon/LinkIcon"
import Image from "./Image"

const DesktopAboutMe = ({ theme }) => {
  const [title, setTitle] = useState("")
  const [texts, setTexts] = useState({})

  useEffect(() => {
    setTitle(theme.lang.title.aboutme)
    setTexts(theme.lang.text.aboutme)
  }, [theme])

  return (
    <GridContainer>
      <CustomTitle gridArea={"title"} text={title} />
      <CustomText gridArea={"primary"} text={texts.primary} />
      <CustomText gridArea={"secondary"} text={texts.secondary} />
      <CustomText gridArea={"tetriary"} text={texts.tetriary} />
      <CustomText gridArea={"quaternary"} text={texts.quaternary} />
      <IconContainer gridArea={"icons"}>
        <LinkIcon
          size={"60px"}
          name={"linkedin"}
          link={"https://www.linkedin.com/in/grzegorz-otto/"}
        />
        <LinkIcon
          size={"60px"}
          name={"gitlab"}
          link={"https://gitlab.com/grzott"}
        />
      </IconContainer>
      <Image gridArea={"img"} />
    </GridContainer>
  )
}

export default withTheme(DesktopAboutMe)
