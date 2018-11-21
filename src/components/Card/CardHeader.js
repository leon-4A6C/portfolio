import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
padding: 0.1em 1em;
`


class CardHeader extends React.Component {
    render() {
        return(
            <Wrapper {...this.props}>
                {this.props.children}
                <hr />
            </Wrapper>
        )
    }
}

export default CardHeader;