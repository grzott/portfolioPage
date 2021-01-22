import styled from "styled-components"
import { isMobile } from "react-device-detect"

export const FormContainer = styled.form`
  padding: 40px 0;
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: background-color 0.9s ease;
  transition: color 0.9s ease;
  &>h1 {
    margin: 0 0 20px 0;
  }
`
export const ElementContainer = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Input = styled.input`
border: none;
  width: 90%;
  height: 60px;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  display: flex;
  justify-content: center;
  transition: color 0.9s ease;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
  line-height: 30px;
  letter-spacing: 0.1em;
  padding-left: 20px;
  ::placeholder {
    opacity: 0.5; 
  }
`

export const Textarea = styled.textarea`
  border: none;
  resize: none;
  width: 90%;
  height: ${isMobile ? '120px' :'170px'};
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  transition: color 0.9s ease;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
  line-height: 30px;
  letter-spacing: 0.1em;
  padding: 20px 0 0 20px;
  ::placeholder {
    opacity: 0.5;
  }
`
export const Button = styled.button`
  border: none;
  width: 200px;
  height: ${isMobile ? '75px' : '50px'};
  background-color: ${({ theme }) => theme.color.secondary};
  transition: color 0.9s ease;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
`

export const ValidationMsgContainer = styled.p`
  height: 30px;
  color: ${({ theme }) => theme.color.error};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
  // padding: 15px 0;
  letter-spacing: 0.075em;
`