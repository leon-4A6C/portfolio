import React from "react";
import styled, {css} from "styled-components"
import moment from "moment"

import { Row, Col } from "./Grid"
import InView from "./InView"

const ProjectWrapper = styled.div`
    margin: 2em 0;
`

const ImgWrapper = styled.div`
    perspective: 1000px;

    width: 100%;
`
const Img = styled.img`
    ${({inView}) => !inView? css`
        transform: rotateX(-60deg);
        opacity: 0;
    `: css`
        transform: rotateX(0deg);
        opacity: 1;
    `}

    width: 100%;
    height: auto;

    transition: transform 600ms ease-in-out, opacity 500ms ease-in-out;
`

const Info = styled.div`
    margin-left: 2em;
`
const Date = styled.small`
    
`
const InfoTitle = styled.h2`
    margin-bottom: 0;
`
const Description = styled.p`

`

const Buttons = styled.div`

`
const Button = styled.a`
    display: inline-block;

    border: 0.1em solid black;
    border-radius: 0.2em;

    font-size: 1.7rem;
    color: black;

    padding: 0.2em 1em;
    margin-right: 1em;

    transition: color 600ms, background 600ms;
    &:hover {
        color: white;
        background: black;
    }
`

export default class Project extends React.Component {

    state = {
        inView: false,
        loaded: false
    }

    onEnter = () => {
        this.setState({
            inView: true
        });
    }

    onLoad = () => {
        this.setState({
            loaded: true
        })
    }

    buttonClass(type) {
        let btnClass = "fa"
        switch (type) {
            case "github":
                btnClass += "b fa-github"
                break;
        
            default:
                btnClass += "s fa-link"
                break;
        }

        return btnClass;
    }

    render() {
        let {date} = this.props;
        const { inView, loaded } = this.state;
        const show = inView && loaded;

        date = moment(date, "YYYY-MM-DD").fromNow();


        return (
            <InView onEnter={this.onEnter}>
                <ProjectWrapper>
                    <Row>

                        <Col xs={12} md={3}>
                            <ImgWrapper>
                                <Img onLoad={this.onLoad} inView={show} src={inView ? this.props.img : ""} alt={this.props.title} />
                            </ImgWrapper>
                        </Col>

                        <Col>
                            <Info>
                                <InfoTitle>
                                    {this.props.title}
                                </InfoTitle>
                                <Date>
                                    {date}
                                </Date>
                                <Description>
                                    {this.props.description}
                                </Description>
                                <Buttons>
                                    {this.props.buttons.map((x, i) => <Button target="_blank" key={i} href={x.url}><i className={this.buttonClass(x.type)}/></Button>)}
                                </Buttons>
                            </Info>
                        </Col>
                    </Row>
                </ProjectWrapper>
            </InView>
        )
    }

}