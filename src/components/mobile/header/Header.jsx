import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Wrapper, Nav, Switches, BurgerWrapper, BurgerElement } from "./styles"
import { withTheme } from "styled-components"
import BulbIcon from "../../_shared/bulbIcon/BulbIcon"
import { useDispatch } from "react-redux"
import { actions } from "../../../redux/actionTypes"
import CustomLangSwitcher from "../../_shared/customLangSwitcher/CustomLangSwitcher"

const Header = ({ theme }) => {
  const [toggleTheme, setTheme] = useState(Boolean)
  const [toggleLang, setLang] = useState(Boolean)
  const dispatch = useDispatch()
  const [titles, setTitles] = useState({})
  const [isWrapped, setWrapped] = useState(true)

  useEffect(() => {
    console.log(isWrapped)
  }, [isWrapped])

  useEffect(() => {
    setTitles(theme.lang.nav)
  }, [theme])

  useEffect(() => {
    if (toggleTheme) {
      dispatch({
        type: actions.TOGGLE_THEME,
        payload: false,
      })
    } else {
      dispatch({
        type: actions.TOGGLE_THEME,
        payload: true,
      })
    }
  }, [toggleTheme])

  useEffect(() => {
    if (toggleLang) {
      dispatch({
        type: actions.TOGGLE_LANGUAGE,
        payload: false,
      })
    } else {
      dispatch({
        type: actions.TOGGLE_LANGUAGE,
        payload: true,
      })
    }
  }, [toggleLang, actions])

  const NavLink = ({ children, to, activeStyle, isWrapped, setWrapped }) => (
    <Link
      onClick={() => {
        setWrapped(true)
      }}
      to={to}
      activeStyle={activeStyle}
    >
      {children}
    </Link>
  )

  const Burger = ({ isWrapped, setWrapped }) => {
    return (
      <BurgerWrapper
        onClick={() => {
          setWrapped(false)
        }}
      >
        <BurgerElement />
        <BurgerElement />
        <BurgerElement />
      </BurgerWrapper>
    )
  }

  const activeStyle = {
    color: theme.color.focused,
  }

  return isWrapped ? (
    <Burger isWrapped={isWrapped} setWrapped={setWrapped} />
  ) : (
    <Wrapper
      onClick={() => {
        setWrapped(true)
      }}
    >
      <Nav
        onClick={() => {
          setWrapped(true)
        }}
      >
        <NavLink
          isWrapped={isWrapped}
          setWrapped={setWrapped}
          activeStyle={activeStyle}
          to="/"
        >
          {titles.home}
        </NavLink>
        <NavLink
          isWrapped={isWrapped}
          setWrapped={setWrapped}
          activeStyle={activeStyle}
          to="/aboutme/"
        >
          {titles.aboutme}
        </NavLink>
        <NavLink
          isWrapped={isWrapped}
          setWrapped={setWrapped}
          activeStyle={activeStyle}
          to="/skills/"
        >
          {titles.skills}
        </NavLink>
        <NavLink
          isWrapped={isWrapped}
          setWrapped={setWrapped}
          activeStyle={activeStyle}
          to="/projects/"
        >
          {titles.projects}
        </NavLink>
        <NavLink
          isWrapped={isWrapped}
          setWrapped={setWrapped}
          activeStyle={activeStyle}
          to="/contact/"
        >
          {titles.contact}
        </NavLink>
        <BulbIcon size={"35px"} toggleTheme={toggleTheme} setTheme={setTheme} />
        <Switches>
          <CustomLangSwitcher toggleLang={toggleLang} setLang={setLang} />
        </Switches>
      </Nav>
    </Wrapper>
  )
}

export default withTheme(Header)
