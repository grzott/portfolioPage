import React from "react"
import HomePageTitle from "./HomePageTitle"
import { withTheme } from "styled-components"
import HomePageText from "./HomePageText"
import { HomeContainer } from "./styles/home"

const Home = ({ theme }) => {
  return (
    <HomeContainer>
      <HomePageText />
      <HomePageTitle />
    </HomeContainer>
  )
}

export default withTheme(Home)
