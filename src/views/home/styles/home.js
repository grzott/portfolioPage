import styled from "styled-components"
import { isMobile } from "react-device-detect"

export const HomeContainer = styled.div`
height: 80vh;
display: flex;
justify-content: center;
align-items: center;
`

export const Text = styled.p`
width: ${isMobile ? '180px' : '420px'};
z-Index: 2;
color: ${({ theme }) => theme.color.primary};
font-family: ${({ theme }) => theme.font.primary};
font-size: ${({ theme }) => theme.size.medium};
font-weight: ${({ theme }) => theme.fontStyle.bold};
line-height: ${isMobile ? '30px' : '40px'};
letter-spacing: 0.1em;
pointer-events: none;
position: absolute;
top: 60%;
left: 20%;
`

export const TextHighlighted = styled.span`
color: ${({ theme }) => theme.color.secondary};`