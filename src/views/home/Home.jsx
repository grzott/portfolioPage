import React, {useState, useEffect} from "react"
import HomePageTitle from "../../components/_shared/pageBigTitle/PageBigTitle"
import { withTheme } from "styled-components"
import HomePageText from "./HomePageText"
import { HomeContainer } from "./styles/home"

const Home = ({ theme }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(theme.lang.title.home)
  }, [theme])

  return (
    <HomeContainer>
      <HomePageText />
      <HomePageTitle>{title}</HomePageTitle>
    </HomeContainer>
  )
}

export default withTheme(Home)
