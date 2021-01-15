import styled from "styled-components"

export const GridContainer = styled.div`
margin: 20px;
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 1fr 1fr / 1fr 1fr;
  grid-template-areas: 
    "title img"
    "primary img"
    "secondary img"
    "tetriary img"
    "quaternary img"
    "icons img";
  grid-gap: 20px;
`
