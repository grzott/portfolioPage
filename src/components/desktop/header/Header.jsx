import React from "react"
import { Link } from "gatsby"
import { Wrapper, Nav } from "./styles"
import { withTheme } from "styled-components"

const Header = ({ theme }) => {
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
      </Nav>


    </Wrapper>

  )
}

export default withTheme(Header)
