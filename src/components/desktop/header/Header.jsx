import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Wrapper, Nav, Switches } from "./styles"
import { withTheme } from "styled-components"
import Icon from '../../_shared/customIcon/CustomIcon'
import { useSelector, useDispatch } from "react-redux"
import { actions } from '../../../redux/actionTypes'

const Header = ({ theme }) => {
  const [toggleTheme, setTheme] = useState(false)
  const dispatch = useDispatch()

  const toggler = useSelector(state => state.toggleTheme)

  useEffect(() => {
    console.log('toggleTheme: ', toggleTheme)
    console.log('toggler: ', toggler)
  }, [toggleTheme])

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
        <NavLink activeStyle={activeStyle} to="/">Home</NavLink>
        <NavLink activeStyle={activeStyle} to="/aboutme/">About Me</NavLink>
        <NavLink activeStyle={activeStyle} to="/skills/">Skills</NavLink>
        <NavLink activeStyle={activeStyle} to="/projects/">Projects</NavLink>
        <NavLink activeStyle={activeStyle} to="/contact/">Contact</NavLink>
        <Switches>
          <Icon name={'bulb'} toggleTheme={toggleTheme} setTheme={setTheme} />
        </Switches>
      </Nav>


    </Wrapper>

  )
}

export default withTheme(Header)
