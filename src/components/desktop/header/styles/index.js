import styled from "styled-components"

export const Wrapper = styled.header` 
  align-self: flex-end;
  font-size: 30px;
  color: ${({ theme }) => theme.color.primary};
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px 20px
`