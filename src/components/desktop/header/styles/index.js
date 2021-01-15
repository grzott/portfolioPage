import styled from "styled-components"

export const Wrapper = styled.header` 
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.backgroundColor.opacity};
`

export const Nav = styled.nav`
  display: flex;
  &>a {
    margin: 0 1em;
    color: ${({ theme }) => theme.color.primary};
    &:hover {
      color: ${({ theme }) => theme.color.focused};
    }
  }

`

export const Switches = styled.div`
  
`

