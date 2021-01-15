import styled from "styled-components"

export const Wrapper = styled.header` 
width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.backgroundColor.opacity};
  transition: 0.9s ease
`

export const Nav = styled.nav`
  display: flex;
  &>a {
    margin: 0 1em;
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: ${({ theme }) => theme.size.medium};
    font-weight: ${({ theme }) => theme.fontStyle.regular};
    &:hover {
      color: ${({ theme }) => theme.color.focused};
    }
  }

`

export const Switches = styled.div`
  display: grid;
  grid-template: 1fr / auto;
  grid-gap: 20px;

`



