import React from "react";
import styled from "styled-components"

import {Card, CardTitle, CardHeader, CardBody} from "../components/Card"

const StyledCard = styled(Card)`
    margin: 1em;
`

export default class Project extends React.Component {

    render() {
        return (
            <StyledCard>
                <CardHeader>
                    <CardTitle>{this.props.title}</CardTitle>
                </CardHeader>
                <CardBody>
                    <div>
                        {this.props.skills.map((x, i) => <i key={i} className={"fab fa-" + x} />)}
                    </div>
                    <div>
                        {this.props.group}<i className="fa fa-users" />
                    </div>
                    <div>
                        {this.props.description}
                    </div>
                    <div>
                        
                    </div>
                </CardBody>
            </StyledCard>
        )
    }

}