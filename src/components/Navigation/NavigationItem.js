import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";

const Circle = styled.div`
    position: relative;

    &::before {
        display: block;
        content: "";
        background: ${({ theme }) => theme.color.navigation};
        width: 1.3em;
        height: 1.3em;
        margin: 1em;
        border-radius: 100%;
        
        transition: transform 300ms ${({active}) => active ? "0ms" : "300ms"} ease-in-out;
        transform: translateX(${({active}) => active ? "3em" : "0"});
    }

    &::after {
        display: block;
        content: "";
        background: ${({ theme }) => theme.color.secondary};
        width: 1.3em;
        height: 1.3em;
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 1em;
        
        transition: transform 300ms ${({active}) => active ? "300ms" : "0ms"} ease-in-out;
        transform: translateX(${({active}) => active ? "0" : "3em"});
    }

    transition: transform 300ms ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`

export default class NavigationItem extends React.Component {
    render() {
        const {to, activeOnlyWhenExact} = this.props;
        return(
            <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => (
                <li>
                    <Link to={to}>
                        <Circle active={match} />
                    </Link>
                </li>
            )}
          />
        )
    }
}