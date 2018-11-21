import React from "react";
import {Col} from "./Grid"
import {Card, CardBody, CardHeader, CardTitle, CardImage} from "./Card"
import styled from "styled-components";

export default class Project extends React.Component {

    state = {
        pos: {
            x: 0,
            y: 0
        },
        style: {

        }
    }

    refDiv = React.createRef()

    mouseMove = e => {

        let divPos = this.refDiv.current.getBoundingClientRect();

        let pos = {
            y: -(e.screenY - divPos.top - divPos.height/2) / 20,
            x: (e.screenX - divPos.left - divPos.width/2) / 25
        }

        this.setState({ pos })
    }

    mouseLeave = e => {
        let pos = {
            x: 0,
            y: 0
        }

        this.setState({
            pos,
            style: {
                transition: "transform 200ms ease"
            }
        });

    }

    mouseEnter = e => {
        setTimeout(() => {
            this.setState({
                style: {}
            });
        }, 300)
    }

    render() {

        // for mouse move stuff
        let style = {
            transform: `rotateY(${this.state.pos.x}deg) rotateX(${this.state.pos.y}deg)`,
            transformStyle: "preserve-3d",
            perspective: "1000px",
            ...this.state.style
        }

        return(
            <Col {...this.props}>
                <div ref={this.refDiv}>
                    <Card onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseMove={this.mouseMove} style={style}>
                        <CardImage src={"/img/" + this.props.data.img} alt={this.props.data.title + " image"} />
                        <CardHeader style={{transform: "translateZ(50px)"}}>
                            <CardTitle>{this.props.data.title}</CardTitle>
                        </CardHeader>
                        <CardBody style={{transform: "translateZ(50px)"}}>
                            <p>
                                {this.props.data.description}
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </Col>
        )
    }

}