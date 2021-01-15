import React from "react"
import styled, { withTheme } from "styled-components"
import LinkedInIcon from '../../../assets/svg/linkedIn.svg'
import GithubIcon from '../../../assets/svg/github.svg'
import BulbIcon from '../../../assets/svg/bulb.svg'

const IconContainer = styled.div`
color: ${props => props.color};
width: ${props => props.w ? props.w : '60px'};
height: ${props => props.h ? props.h : '60px'};
cursor: pointer;
&:hover {
  color: ${({ theme }) => theme.color.focused};
}

`
const LinkIconContainer = styled.a`
color: ${props => props.color};
width: 60px;
height: 60px;
margin: 0 20px;
`
const CustomIcon = ({ theme, isLink, name, link, setTheme, toggleTheme }) => {

  if (isLink) {
    return (
      <LinkIconContainer href={link}>
        {name === 'linkedIn' ? <LinkedInIcon /> : <GithubIcon />}
      </LinkIconContainer>)
  }
  if (name && name === 'bulb') {
    return (
      <IconContainer name={name} w={'35px'} h={'35px'} color={theme.color.primary} onClick={() => setTheme(!toggleTheme)}>
        <BulbIcon />
      </IconContainer>
    )

  }
  return (
    <IconContainer >
      <p>icon</p>
    </IconContainer>
  )
}

export default withTheme(CustomIcon)
