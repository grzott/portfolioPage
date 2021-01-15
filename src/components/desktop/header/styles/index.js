import styled from "styled-components"
import { Link } from "gatsby"

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
`

export const Nav = styled.nav`
  
`

export const Switches = styled.div`
  
`

