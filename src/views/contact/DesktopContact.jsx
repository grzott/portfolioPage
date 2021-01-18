import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"
import { FormContainer, Input, Textarea, Button } from "./styles"

const DesktopContact = ({ theme }) => {
  const [title, setTitle] = useState("")
  const [texts, setTexts] = useState({})

  useEffect(() => {
    setTitle(theme.lang.title.contact)
    setTexts(theme.lang.text.contact)
  }, [theme.lang])

  return (
    <FormContainer>
      <CustomTitle text={title} />
      <Input type="text" name="name" placeholder={texts.name} />
      <Input type="text" name="name" placeholder={texts.email} />
      <Textarea placeholder={texts.msg} />
      <Button>{texts.btn}</Button>
    </FormContainer>
  )
}

export default withTheme(DesktopContact)
