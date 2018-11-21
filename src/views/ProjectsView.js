import React from "react"

import Page from '../components/Page'
import {Row, Col} from "../components/Grid"
import projects from "../projects.json"

export default class ProjectsView extends React.Component {
    render() {
        return (
            <Page>
                <h1>Projects</h1>
                <Row>
                    <Col xs={12} md={6}>
                        <h4>dinges 12</h4>
                    </Col>
                    <Col xs={6}>
                        <h4>dinges 6</h4>
                    </Col>
                    <Col md={12}>
                        <h4>dinges niks</h4>
                    </Col>
                </Row>
            </Page>
        )
    }
}