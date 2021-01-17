import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Wrapper, Nav, Switches } from "./styles"
import { withTheme } from "styled-components"
import BulbIcon from '../../_shared/bulbIcon/BulbIcon'
import { useDispatch } from "react-redux"
import { actions } from '../../../redux/actionTypes'
import CustomLangSwitcher from '../../_shared/customLangSwitcher/CustomLangSwitcher'

const Header = ({ theme }) => {
  const [toggleTheme, setTheme] = useState(false)
  const [toggleLang, setLang] = useState(false)
  const dispatch = useDispatch()
  const [titles, setTitles] = useState({})

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
  }, [toggleTheme, actions])

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

  const NavLink = ({ children, to, activeStyle }) => (
    <Link
      to={to} activeStyle={activeStyle}
    >
      {children}
    </Link>
  )

  const activeStyle = {
    color: theme.color.focused
  }

  return (
    <Wrapper>
      <Nav>
        <NavLink activeStyle={activeStyle} to="/">{titles.home}</NavLink>
        <NavLink activeStyle={activeStyle} to="/aboutme/">{titles.aboutme}</NavLink>
        <NavLink activeStyle={activeStyle} to="/skills/">{titles.skills}</NavLink>
        <NavLink activeStyle={activeStyle} to="/projects/">{titles.projects}</NavLink>
        <NavLink activeStyle={activeStyle} to="/contact/">{titles.contact}</NavLink>
        <Switches>
          <BulbIcon size={'35px'} toggleTheme={toggleTheme} setTheme={setTheme} />
          <CustomLangSwitcher toggleLang={toggleLang} setLang={setLang} />
        </Switches>
      </Nav>


    </Wrapper>

  )
}

export default withTheme(Header)
