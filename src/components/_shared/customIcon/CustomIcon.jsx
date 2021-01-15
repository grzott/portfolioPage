import React from "react"
import styled from "styled-components"
import LinkedInIcon from '../../../assets/svg/linkedIn.svg'
import GithubIcon from '../../../assets/svg/github.svg'

const IconContainer = styled.div`
color: ${props => props.color};
width: 60px;
height: 60px;
`
const LinkIconContainer = styled.a`
color: ${props => props.color};
width: 60px;
height: 60px;
margin: 0 20px;
`
const CustomIcon = ({ isLink, name, link }) => {
  if (isLink) {
    return (
      <LinkIconContainer href={link}>
        {name === 'linkedIn' ? <LinkedInIcon /> : <GithubIcon />}
      </LinkIconContainer>)
  }
  return (
    <IconContainer >
      <LinkedInIcon />
    </IconContainer>
  )
}

export default CustomIcon
