import React, {useState, useEffect} from "react"
import { withTheme } from "styled-components"
import PageBigTitle from "../../components/_shared/pageBigTitle/PageBigTitle"
import { NotFoundContainer, Text } from "./styles/index"

const NotFound = ({ theme }) => {
const [text, setText] = useState('')

useEffect(() => {
    setText(theme.lang.notFound.text)
  }, [theme])

  return (
    <NotFoundContainer>
        <PageBigTitle>404</PageBigTitle>
        <Text>{text}</Text>
    </NotFoundContainer>
  
  )
}

export default withTheme(NotFound)
