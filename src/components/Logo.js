import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LogoBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: ${({theme}) => theme.color.secondary};
    text-align: center;
    z-index: 100;
    padding: 2em;
`

const H2 = styled.h2`
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 4em;
    text-align: center;
    transform: skew(-10deg) rotateZ(-10deg);
    overflow: hidden;
    margin: 0;
    color: ${({theme}) => theme.color.text};

    transition: text-shadow 300ms ease-out, transform 300ms ease-out;
    &:hover {
        transform: translateX(6px) translateY(-6px) skew(-10deg) rotateZ(-10deg);
        text-shadow: -1px 1px ${({theme}) => theme.color.bg},
                     -2px 2px ${({theme}) => theme.color.bg},
                     -3px 3px ${({theme}) => theme.color.bg},
                     -4px 4px ${({theme}) => theme.color.bg},
                     -5px 5px ${({theme}) => theme.color.bg},
                     -6px 6px ${({theme}) => theme.color.bg};
    }
`

export default class Logo extends React.Component {

    render() {
        return (
            <Link to="/home">
                <LogoBox>
                    <H2>LV</H2>
                </LogoBox>
            </Link>
        )
    }

}