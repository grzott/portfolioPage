import React from "react"
import styled, { withTheme } from "styled-components"

const Text = styled.p`
    cursor: ${props => props.active ? 'pointer' : 'default'};
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: ${({ theme }) => theme.size.medium};
    font-weight: ${({ theme }) => theme.fontStyle.regular};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        color: ${props => props.active ? ({ theme }) => theme.color.focused : ({ theme }) => theme.color.primary};
      }
`

const CustomLangSwitcher = ({ theme, toggleLang, setLang }) => {
    return (
        <>
            <Text className={toggleLang ? 'activeLang' : ''} active onClick={() => setLang(true)}>PL</Text>
            <Text>/</Text>
            <Text className={toggleLang ? '' : 'activeLang'} active onClick={() => setLang(false)}>ENG</Text>
        </>
    )
}

export default withTheme(CustomLangSwitcher)