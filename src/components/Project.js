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
                            </Info>
                        </Col>

                    </Row>
                </ProjectWrapper>
            </InView>
        )
    }

}