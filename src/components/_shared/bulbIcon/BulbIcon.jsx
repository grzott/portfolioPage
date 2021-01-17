import React from "react"
import styled, { withTheme } from "styled-components"
import Icon from '../../../assets/svg/bulb.svg'

const BulbContainer = styled.div`
color: ${props => props.color};
width: ${props => props.size};
height: ${props => props.size};
cursor: pointer;
transition: 0.9s ease;
&:hover {
  color: ${({ theme }) => theme.color.focused};
  transform: scale(1.2);
}
`
const BulbIcon = ({ theme, setTheme, toggleTheme, size }) => {
    return (
        <BulbContainer size={size} color={theme.color.primary} onClick={() => setTheme(!toggleTheme)}>
            <Icon />
        </BulbContainer>
    )
}

export default withTheme(BulbIcon)
