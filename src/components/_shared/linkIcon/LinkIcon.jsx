import React from "react"
import styled, { withTheme } from "styled-components"
import LinkedInIcon from '../../../assets/svg/linkedIn.svg'
import GithubIcon from '../../../assets/svg/github.svg'
import LIcon from '../../../assets/svg/link.svg'

const LinkIconContainer = styled.a`
width: ${props => props.size};
height: ${props => props.size};
margin: 0 20px;
transition: 0.9s ease;
&:hover {
  color: ${({ theme }) => theme.color.focused};
  transform: scale(1.2);
}
`

const iconSwitcher = (name) => {
    switch (name) {
        case 'gitlab':
            return <GithubIcon />
        case 'linkedin':
            return <LinkedInIcon />
        case 'link':
            return <LIcon />
        default:
            break;
    }
}

const LinkIcon = ({ theme, name, link, size }) => {
    return (
        <LinkIconContainer href={link} size={size}>
            {iconSwitcher(name)}
        </LinkIconContainer>
    )
}

export default withTheme(LinkIcon)
