import React from "react"
import { withTheme } from "styled-components"
import CustomTitle from '../../components/_shared/customTitle/CustomTitle'


const MobileContact = ({ theme }) => {
  return <CustomTitle text={theme.lang.eng.title.contact} />
}

export default withTheme(MobileContact)
