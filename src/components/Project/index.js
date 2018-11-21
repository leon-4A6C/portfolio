import React from "react";
import {Col} from "../Grid"
import {Body, Wrapper, Img} from "./components"

export default class Project extends React.Component {

    state = {
        pos: {
            x: 0,
            y: 0
        },
        style: {

        }
    }

    transitionTimeout;

    refDiv = React.createRef()

    mouseMove = e => {

        const max = 25;

        let divPos = this.refDiv.current.getBoundingClientRect();

        let x = (e.clientX - divPos.left) / divPos.width;
        let y = (e.clientY - divPos.top) / divPos.height;

        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);

        let tiltX = ((max / 2 - x * max)).toFixed(2);
        let tiltY = ((y * max - max / 2)).toFixed(2);

        let pos = {
            y: -tiltY,
            x: -tiltX
        }

        this.setState({ pos })
    }

    mouseLeave = e => {
        let pos = {
            x: 0,
            y: 0
        }
        this.setState({ pos });
        this.setTransition();
    }

    mouseEnter = e => {
        this.setTransition();
    }

    setTransition() {
        clearTimeout(this.transitionTimeout);
        this.setState({
            style: {
                transition: "transform 300ms cubic-bezier(.03,.98,.52,.99)"
            }
        });

        this.transitionTimeout = setTimeout(() => {
            this.setState({
                style: {}
            });
        }, 300);
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
                    <Wrapper onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onMouseMove={this.mouseMove} style={style}>
                        <Img src={"/img/" + this.props.data.img} alt={this.props.data.title + " image"} />
                        <Body>
                            <h2>dinges</h2>
                        </Body>
                    </Wrapper>
                </div>
            </Col>
        )
    }

}