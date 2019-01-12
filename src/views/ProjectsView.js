import React from "react"
import styled from "styled-components"

import Page from '../components/Page'
import Project from "../components/Project"
import projects from "../projects"
import {Row, Col} from "../components/Grid"

const H3 = styled.h3`
    text-align: center;
    padding-top: 2em;
    font-size: 2rem;
`

const StyledPage = styled(Page)`
    padding-bottom: 20em;
`

export default class ProjectsView extends React.Component {
    render() {
        return (
            <StyledPage>
                <H3>
                    Stuff I've made
                </H3>
                <Row>
                    {projects.map((x, i) => 
                        <Col
                            xs={12}
                            sm={6}
                            lg={4}
                            key={i}>
                            <Project {...x} />
                        </Col>
                    )}
                </Row>
            </StyledPage>
        )
    }
}