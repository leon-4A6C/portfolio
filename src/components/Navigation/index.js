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
                    {this.props.pages.map((x, i) => 
                        <NavigationItem key={i} offset={ (300 * i) + "ms"} to={"/"+x.slug} />
                    )}
                </Ul>
            </Nav>
        )
    }
}