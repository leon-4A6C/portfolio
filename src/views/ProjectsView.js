import React from "react"
import styled from "styled-components"

import Page from '../components/Page'

const Stuff = styled.div`
    min-height: 250vh;
`

export default class ProjectsView extends React.Component {
    render() {
        return (
            <Page>
                
                <Stuff />

            </Page>
        )
    }
}