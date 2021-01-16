import styled from "styled-components"

export const GridContainer = styled.div`
margin: 20px;
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr 1fr / 1.5fr 1fr;
  grid-template-areas: 
    "title tools"
    "primary tools"
    "secondary tools"
    "tetriary tools"
    "quaternary tools";
    column-gap: 100px;
    justify-content: space-between;
`