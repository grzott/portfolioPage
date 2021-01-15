import React from "react"
import styled from "styled-components"

const Img = styled.img`
grid-area: ${props => props.gridArea};
max-width: 400px;
height: auto;
`
const Image = ({ gridArea }) => {
    return (
        <Img gridArea={gridArea} src={'/me.png'} alt='photo' />
    )
}

export default Image