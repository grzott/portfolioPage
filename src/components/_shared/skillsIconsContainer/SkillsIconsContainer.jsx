import React from "react"
import styled, { withTheme } from "styled-components"
import { isMobile } from "react-device-detect"
import HtmlIcon from "../../../assets/svg/html.svg"
import CssIcon from "../../../assets/svg/css.svg"
import SassIcon from "../../../assets/svg/sass.svg"
import JsIcon from "../../../assets/svg/js.svg"
import TsIcon from "../../../assets/svg/ts.svg"
import RIcon from "../../../assets/svg/rIcon.svg"
import NextIcon from "../../../assets/svg/nextjs.svg"
import GatsbyIcon from "../../../assets/svg/gatsbyjs.svg"
import FigmaIcon from "../../../assets/svg/figma.svg"

const ICONS_SIZE = 150

const GridContainer = styled.div`
  grid-area: tools;
  display: grid;
  grid-template: ${isMobile ? "auto / 1fr 1fr" : "auto / 1fr 1fr 1fr"};
  margin: ${isMobile ? "30px 0 0 0" : ""};
  grid-gap: 20px;
`
const icons = [
  "html",
  "css",
  "sass",
  "js",
  "rIcon",
  "gatsbyjs",
  "next",
  "figma",
  "ts",
]

const IconContainer = styled.div`
  max-width: ${ICONS_SIZE}px;
  max-height: ${ICONS_SIZE}px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.9s ease;
  &:hover {
    transform: scale(1.2);
  }
`

const iconSwitcher = icon => {
  switch (icon) {
    case "gatsbyjs":
      return <GatsbyIcon />
      break
    case "js":
      return <JsIcon />
      break
    case "ts":
      return <TsIcon />
      break
    case "html":
      return <HtmlIcon />
      break
    case "css":
      return <CssIcon />
      break
    case "sass":
      return <SassIcon />
      break
    case "next":
      return <NextIcon />
      break
    case "figma":
      return <FigmaIcon />
      break
    case "rIcon":
      return <RIcon />
      break
    default:
      break
  }
}

const SkillsIconsContainer = ({ theme }) => {
  return (
    <GridContainer>
      {icons.map((item, i) => (
        <IconContainer key={i}>{iconSwitcher(item)}</IconContainer>
      ))}
    </GridContainer>
  )
}

export default withTheme(SkillsIconsContainer)
