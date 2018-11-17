import React from "react";
import styled from "styled-components";

const Section = styled.section`
    height: 100vh;
    overflow: hidden;
    position: relative;
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