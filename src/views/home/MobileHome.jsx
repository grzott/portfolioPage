import React from "react"
import HomePageTitle from '../../components/_shared/homePageTitle/HomePageTitle'
import { withTheme } from "styled-components"
import HomePageText from "../../components/_shared/homePageText/HomePageText"

const MobileHome = ({ theme }) => {
  return (
    <>
      <HomePageTitle />
      <HomePageText />
    </>
  )
}

export default withTheme(MobileHome)
