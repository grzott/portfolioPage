import React from "react"
import styled from "styled-components"
import { isMobile } from "react-device-detect"

const Img = styled.div`
  grid-area: ${props => props.gridArea};
  width: ${isMobile ? "75vw" : "400px"};
  height: ${isMobile ? "75vh" : "auto"};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`
const Image = ({ gridArea }) => {
  return <Img gridArea={gridArea} src={"/me.png"} alt="photo" />
}

export default Image
