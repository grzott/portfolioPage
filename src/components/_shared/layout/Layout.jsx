import React, { useEffect, useState } from "react";
// import { isMobile } from "react-device-detect";
import { GlobalStyle } from "../../../theme/global-styles";
import { withTheme } from "styled-components";
import DesktopContainer from "../../desktop/container/Container";
import MobileContainer from "../../mobile/container/Container";
import DesktopHeader from "../../desktop/header/Header";
import MobileHeader from "../../mobile/header/Header";
import Footer from "../../_shared/footer/Footer";
import { ThemeProvider } from 'styled-components';
import * as _theme from '../../../theme/Themes';
import { useSelector } from 'react-redux'
import Loader from "react-loader-spinner";

const { isMobile } = require("react-device-detect")

const Layout = withTheme(({ children }) => {
  const toggleTheme = useSelector(state => state.toggleTheme)
  const toggleLang = useSelector(state => state.toggleLanguage)

  const [theme, setTheme] = useState(_theme.darkTheme)
  const [lang, setLang] = useState(_theme.eng)

  useEffect(() => {
    if (!toggleTheme) {
      setTheme(_theme.lightTheme)
    } else {
      setTheme(_theme.darkTheme)
    }
  }, [toggleTheme])

  useEffect(() => {
    if (!toggleLang) {
      setLang(_theme.pl)
    } else {
      setLang(_theme.eng)
    }
  }, [toggleLang])

  if (isMobile)
    return (
      <ThemeProvider theme={{...theme, ...lang}}>
        <GlobalStyle />
        <MobileContainer>
          {children}
          <MobileHeader />
          <Footer />
        </MobileContainer>     
      </ThemeProvider>
    ) 
    else if (!isMobile) {
      return (
        <ThemeProvider theme={{...theme, ...lang}}>
          <GlobalStyle />
          <DesktopContainer>
            {children}
            <DesktopHeader />
            <Footer />
          </DesktopContainer>   
        </ThemeProvider>
      )
    }

    return (
    <Loader 
    type="TailSpin"
    color={theme.color.focused}
    height={100}
    width={100}
    />
  )
})

export default Layout
