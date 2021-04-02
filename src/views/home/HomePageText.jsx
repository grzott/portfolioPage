import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import { Text, TextHighlighted } from "./styles/home"

const HomePageText = ({ theme }) => {
  const [texts, setTexts] = useState({})

  useEffect(() => {
    setTexts(theme.text.home)
  }, [theme])

  return (
    <Text>
      {texts.primary}
      <TextHighlighted>{texts.secondary}</TextHighlighted>
    </Text>
  )
}

export default withTheme(HomePageText)
