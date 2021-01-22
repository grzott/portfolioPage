import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"
import {
  FormContainer,
  Input,
  Textarea,
  Button,
  ElementContainer,
} from "./styles"
import { Formik } from "formik"
import ValidationMsg from "./ValidationMsg"
import { isMobile } from "react-device-detect"

const Contact = ({ theme }) => {
  const [title, setTitle] = useState("")
  const [texts, setTexts] = useState({})
  const [errorMsg, setErrorMsg] = useState({})

  useEffect(() => {
    setTitle(theme.lang.title.contact)
    setTexts(theme.lang.text.contact)
    setErrorMsg(theme.lang.text.contact.validation)
  }, [theme.lang])

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = errorMsg.req
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = errorMsg.email
        }
        if (!values.name) {
          errors.name = errorMsg.req
        }
        if (!values.message) {
          errors.message = errorMsg.req
        } else if (values.message.length < 10) {
          errors.message = errorMsg.msg
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
          <ElementContainer height={100}>
            <Input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder={texts.name}
            />
            {errors.name && touched.name && (
              <ValidationMsg>{errors.name}</ValidationMsg>
            )}
          </ElementContainer>
          <ElementContainer height={100}>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder={texts.email}
            />
            {errors.email && touched.email && (
              <ValidationMsg>{errors.email}</ValidationMsg>
            )}
          </ElementContainer>
          <ElementContainer height={isMobile ? 150 : 200}>
            <Textarea
              type="message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              placeholder={texts.msg}
            />
            {errors.message && touched.message && (
              <ValidationMsg>{errors.message}</ValidationMsg>
            )}
          </ElementContainer>
          <Button type="submit" disabled={isSubmitting}>
            {texts.btn}
          </Button>
        </FormContainer>
      )}
    </Formik>
  )
}

export default withTheme(Contact)
