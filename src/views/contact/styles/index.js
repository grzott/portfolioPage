import styled from "styled-components"

export const FormContainer = styled.form`
  margin: 0 2vw;
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  padding: 60px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: background-color 0.9s ease;
  
`

export const Input = styled.input`
border: none;
  width: 90%;
  height: 100px;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  margin: 50px 100px 0 100px;
  display: flex;
  justify-content: center;
  transition: 0.9s ease;
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
  height: 300px;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  margin: 50px 100px 0 100px;
  transition: 0.9s ease;
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
  margin-top: 50px;
  width: 25%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.secondary};
  transition: 0.9s ease;
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.size.regular};
  font-weight: ${({ theme }) => theme.fontStyle.regular};
`
