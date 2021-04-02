import styled from "styled-components"
import { isMobile } from "react-device-detect"

export const GridContainer = styled.div`
  margin: 20px 0;
  display: ${isMobile ? 'flex' : 'grid'};
  flex-direction: column;
  align-items: ${isMobile ? 'center' : ''};
  grid-template: 1fr 1fr 1fr 1fr 1fr / 1.5fr 1fr;
  grid-template-areas: 
    "title tools"
    "primary tools"
    "secondary tools"
    "tetriary tools"
    "quaternary tools";
  &>h1 {
      margin: ${isMobile ? '0' : '20px 0'};
    }
  &>p {
      margin: ${isMobile ? '0' : '20px 0'};
    }
`