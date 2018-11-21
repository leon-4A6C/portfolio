import styled from "styled-components"
import React from "react"

const Wrapper = styled.div`
    border-radius: 1em 1em 0 0;
`

const Img = styled.img`
    width: 100%;
    height: auto;
    border-radius: inherit;
`

class CardImage extends React.Component {
    render() {
        return(
            <Wrapper>
                <Img src={this.props.src} alt={this.props.alt}/>
            </Wrapper>
        )
    }
}

export default CardImage;