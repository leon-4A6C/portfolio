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
        console.log(this.props)
        return(
            <Nav>
                <Ul>
                    <NavigationItem to="/home" />
                    <NavigationItem to="/projects" />
                    <NavigationItem to="/about" />
                    <NavigationItem to="/dinges" />
                </Ul>
            </Nav>
        )
    }
}