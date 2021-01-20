import styled from "styled-components"
import { isMobile } from "react-device-detect"

export const GridContainer = styled.div`
margin: 20px;
  display: ${isMobile? 'flex' : 'grid'};
  flex-direction: column;
  grid-template: '1fr 1fr 1fr 1fr 1fr 1fr / 1.5fr 1fr';
  grid-template-areas: 
    "title img"
    "primary img"
    "secondary img"
    "tetriary img"
    "quaternary img"
    "icons  img";
    column-gap: 100px;
    justify-content: space-between;
`
export const IconContainer = styled.div`
display: flex;
grid-area: ${props => props.gridArea};
padding: ${isMobile ? "20px 0" : ""}
`