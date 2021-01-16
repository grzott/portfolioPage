import React from "react"
import styled, { withTheme } from "styled-components"
import LinkedInIcon from '../../../assets/svg/linkedIn.svg'
import GithubIcon from '../../../assets/svg/github.svg'
import BulbIcon from '../../../assets/svg/bulb.svg'
import LinkIcon from '../../../assets/svg/link.svg'

const BulbContainer = styled.div`
color: ${props => props.color};
width: ${props => props.w ? props.w : '60px'};
height: ${props => props.h ? props.h : '60px'};
cursor: pointer;
transition: 0.9s ease;
&:hover {
  color: ${({ theme }) => theme.color.focused};
  transform: scale(1.2);
}
`
const LinkIconContainer = styled.a`
color: ${props => props.color};
width: 60px;
height: 60px;
margin: 0 20px;
transition: 0.9s ease;
&:hover {
  color: ${({ theme }) => theme.color.focused};
  transform: scale(1.2);
}
`

const IconContainer = styled.div``


const CustomIcon = ({ theme, isLink, name, link, setTheme, toggleTheme, linkGitlab }) => {

  if (isLink) {
    return (
      <LinkIconContainer href={link}>
        {name === 'linkedIn' ? <LinkedInIcon /> : <GithubIcon />}
      </LinkIconContainer>)
  }
  if (name && name === 'bulb') {
    return (
      <BulbContainer name={name} w={'35px'} h={'35px'} color={theme.color.primary} onClick={() => setTheme(!toggleTheme)}>
        <BulbIcon />
      </BulbContainer>
    )
  }
  if (name === 'link' || 'github') {
    return (
      <LinkIconContainer href={name === 'link' ? link : linkGitlab}>
        {name === 'link' ? <LinkIcon /> : <GithubIcon />}
      </LinkIconContainer>)
  }
  return (
    <IconContainer >
      <p>icon</p>
    </IconContainer>
  )
}

export default withTheme(CustomIcon)
