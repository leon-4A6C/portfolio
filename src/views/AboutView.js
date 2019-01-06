import React from "react"
import styled from "styled-components"

import Page from '../components/Page'
import {Row, Col} from "../components/Grid"

const H3 = styled.h3`
    padding-top: 2em;
    font-size: 2rem;
`
const Description = styled.p`
    padding-top: 2em;
`
const HR = styled.hr`
    width: 50%;
    margin: 0;
`

export default class AboutView extends React.Component {
    render() {
        return (
            <Page>
                <Row>
                    <Col xs={12} sm={6}>
                    </Col>
                    <Col xs={12} sm={6}>
                        <H3>
                            About me
                        </H3>
                        <HR />
                        <Description>
                            This is me.
                        </Description>
                    </Col>
                </Row>
            </Page>
        )
    }
}