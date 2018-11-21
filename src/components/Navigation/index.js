import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem";

const Nav = styled.nav`
    position: fixed;
    top: 50%;
    right: 0em;
    transform: translateY(-50%);
    z-index: 1000;
`

const Ul = styled.ul`
    list-style-type: none;
`

export default class Navigation extends React.Component {
    render() {
        return(
            <Nav>
                <Ul>
                    <NavigationItem offset="0ms" to="/home" />
                    <NavigationItem offset="300ms" to="/projects" />
                    <NavigationItem offset="600ms" to="/about" />
                    <NavigationItem offset="900ms" to="/dinges" />
                </Ul>
            </Nav>
        )
    }
}