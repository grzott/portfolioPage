import styled from "styled-components"

export const Wrapper = styled.header` 
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
`

export const Nav = styled.nav`
  padding: 40px 0 0 0;
  width: 70vw;
  height: 75vh;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.backgroundColor.opacity};
  transition: 0.9s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  &>a {
    padding: 10px 0;
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: ${({ theme }) => theme.size.medium};
    font-weight: ${({ theme }) => theme.fontStyle.regular};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      color: ${({ theme }) => theme.color.focused};
    }
  }
`

export const Switches = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr ;
  justify-content: center;
  grid-gap: 10px;
  margin: 0 1em;
`

export const BurgerWrapper = styled.div`
  z-Index: 100;
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row-gap: 10px;
  margin: 0 1em;
`

export const BurgerElement = styled.span`
    width: 50px;
    height: 5px;
    background-color: ${({ theme }) => theme.color.primary};
`



