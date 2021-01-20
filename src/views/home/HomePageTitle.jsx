import React from "react"
import { withTheme } from "styled-components"
import { Title } from "./styles/home"

const HomePageTitle = ({ theme }) => {
  return <Title>{theme.lang.title.home}</Title>
}

export default withTheme(HomePageTitle)
