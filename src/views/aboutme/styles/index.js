import styled from "styled-components"
import { isMobile } from "react-device-detect"

export const GridContainer = styled.div`
  margin: 20px 0;
  display: ${isMobile ? 'flex' : 'grid'};
  flex-direction: column;
  align-items: ${isMobile ? 'center' : ''};
  grid-template: '1fr 1fr 1fr 1fr 1fr 1fr / 1.5fr 1fr';
  grid-template-areas: 
    "title img"
    "primary img"
    "secondary img"
    "tetriary img"
    "quaternary img"
    "icons  img";
  column-gap: 100px;
  &>h1 {
    margin: ${isMobile ? '0' : '20px 0'};
  }
  &>p {
    margin: ${isMobile ? '0' : '20px 0'};
  }
`
export const IconContainer = styled.div`
display: flex;
margin: 20px 0;
grid-area: ${props => props.gridArea};
padding: ${isMobile ? "20px 0" : ""}
`