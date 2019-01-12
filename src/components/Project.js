import React from "react";
import styled from "styled-components"

const Info = styled.div`
    width: 100%;
    height: 100%;

    transform: translateY(20em);
    transition: 300ms ease-in-out;

    background: #153243;
    color: white;
    position: absolute;
`

const ProjectWrapper = styled.div`
    /* overflow: hidden; */
    height: 20em;
    margin: 1em;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;

    &:hover ${Info} {
        transform: translateY(0);
    }
`

export default class Project extends React.Component {

    render() {
        return (
            <ProjectWrapper style={{backgroundImage: "url("+this.props.img+")"}}>
                <Info>
                    <h1>{this.props.title}</h1>
                </Info>
            </ProjectWrapper>
        )
    }

}