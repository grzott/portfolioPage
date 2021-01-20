import styled from "styled-components"

export const Wrapper = styled.header` 
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.color.primary};
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.backgroundColor.opacity};
  transition: background-color 0.9s ease;
`

export const Nav = styled.nav`
  display: flex;
  margin: 0 1em 0 0;
  &>a {
    margin: 0 2em;
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
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 10px;
  margin: 0 1em;
`



