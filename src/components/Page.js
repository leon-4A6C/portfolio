import React from "react";
import styled from "styled-components";

const Section = styled.section`
    font-family: ${({ theme }) => theme.font.primary};
    position: relative;
    min-height: 100vh;
`

export default class Page extends React.Component {
    render() {
        return (
            <Section>
                {this.props.children}
            </Section>
        )
    }
}