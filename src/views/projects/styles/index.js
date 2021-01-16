import styled from "styled-components"

export const GridContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template: auto / 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
  &>h1 {
    margin-top: 100px;
    justify-self: start;
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
`

export const Img = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  transition: 0.9s ease;
  z-index: 1;
  &:hover {
    transform: scale(0.9);
}
`
export const ProjectTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
  z-index: 2;
  text-align: center;
`

export const ProjectLinks = styled.a`
  z-index: 2; 
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 20px;
  
`