import React from "react"
import { Link } from "gatsby"
import { Wrapper, Nav, Switches } from "./styles"
import styled, { withTheme } from "styled-components"

const Header = () => {
  const NavLink = props => (
    <Link
      {...props}
      getProps={({ isPartiallyCurrent }) => {
        return {
          style: {
            color: isPartiallyCurrent ? `${({ theme }) => theme.color.focused}` : `${({ theme }) => theme.color.primary}`,
          },
        }
      }}
    />
  )

  const HeaderLink = styled(NavLink)`
    margin: 0 1.5rem;
    color: ${({ theme }) => theme.color.primary};
    &:hover {
      color: ${({ theme }) => theme.color.focused};
    }
  `
  return (

    <Wrapper>
      <Nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/aboutme/">About Me</HeaderLink>
        <HeaderLink to="/skills/">Skills</HeaderLink>
        <HeaderLink to="/projects/">Projects</HeaderLink>
        <HeaderLink to="/contact/">Contact</HeaderLink>
      </Nav>


    </Wrapper>

  )
}

export default withTheme(Header)
