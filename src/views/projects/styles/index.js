import styled from "styled-components"
import { isMobile } from "react-device-detect"

export const GridContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template: ${isMobile ? 'auto / 1fr' : 'auto / 1fr 1fr 1fr'};
  grid-row-gap: 60px;
  justify-items: center;
  &>h1 {
    justify-self: flex-start;
    margin: ${isMobile ? '0' : '20px 0'};
  }
`

export const ProjectContainer = styled.div`
  width: 330px;
  height: 330px;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: 0.9s ease;
`

export const Img = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 1;
  transition: 0.5s linear;
  opacity: ${props => props.opacity};
  transform: scale(${props => props.scale});
`

export const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
  z-index: 2;
  text-align: center;
  display: ${props => props.display};
`

export const ProjectLinks = styled.div`
  z-index: 2; 
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 20px;
  display: ${props => props.display};
`

export const RespContainer = styled.div`
  padding-top: ${isMobile ? '50%' : '20%'};
  z-index: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
`