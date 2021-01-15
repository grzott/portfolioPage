import React, { useState, useEffect } from "react"
import styled, { withTheme } from "styled-components"

const Positioner = styled.div`
width: 32%;
height: 20%;
position: absolute;
top: 60%;
left: 18%;
`


const Text = styled.p`
color: ${({ theme }) => theme.color.primary};
font-family: ${({ theme }) => theme.font.primary};
font-size: ${({ theme }) => theme.size.big};
font-weight: ${({ theme }) => theme.fontStyle.bold};
line-height: 70px;
letter-spacing: 0.1em;
pointer-events: none;
`
const TextHighlighted = styled.span`
color: ${({ theme }) => theme.color.secondary};
`

const HomePageText = ({ theme }) => {
  const [texts, setTexts] = useState({})

  useEffect(() => {
    setTexts(theme.lang.text.home)
  }, [theme])

  return (
    <Positioner>
      <Text>{texts.primary}
        <TextHighlighted>
          {texts.secondary}
        </TextHighlighted>
      </Text>
    </Positioner>
  )
}

export default withTheme(HomePageText)
