import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"
import { FormContainer, Input, Textarea, Button } from "./styles"
import { Formik } from "formik"

const Contact = ({ theme }) => {
  const [title, setTitle] = useState("")
  const [texts, setTexts] = useState({})

  useEffect(() => {
    setTitle(theme.lang.title.contact)
    setTexts(theme.lang.text.contact)
  }, [theme.lang])

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = "Required"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <FormContainer onSubmit={handleSubmit}>
          <CustomTitle text={title} />
          <Input type="name" name="name" placeholder={texts.name} />
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder={texts.email}
          />
          {errors.email && touched.email && errors.email}
          <Textarea placeholder={texts.msg} />
          <Button type="submit" disabled={isSubmitting}>
            {texts.btn}
          </Button>
        </FormContainer>
      )}
    </Formik>
  )
}

export default withTheme(Contact)
