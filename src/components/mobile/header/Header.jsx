import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./styles"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => {
  return (
    <Wrapper>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/aboutme/">About Me</ListLink>
      <ListLink to="/skills/">Skills</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </Wrapper>
  )
}

export default Header
