import styled from "styled-components"

export const GridContainer = styled.div`
margin: 20px;
  display: grid;
  grid-template: auto / 1.5fr 1fr;
  grid-template-areas: 
    "title img"
    "primary img"
    "secondary img"
    "tetriary img"
    "quaternary img"
    "icons img";
    column-gap: 100px;
    row-gap: 20px;
    justify-content: space-between;
`
export const IconContainer = styled.div`
display: flex;
grid-area: ${props => props.gridArea}
`