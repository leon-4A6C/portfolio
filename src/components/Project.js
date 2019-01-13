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
    ${({show}) => !show? css`
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
    transition: opacity 1000ms 300ms ease-in-out, transform 1000ms ease-in-out;
    ${({show}) => !show? css`
        opacity: 0;
        transform: translateY(-10em);
    `: css`
        opacity: 1;
        transform: translateY(0);
    `}

    @media only screen and (min-width: ${({theme}) => theme.breakpoint.md}) {
        margin-left: 2em;

        ${({show}) => !show? css`
            opacity: 0;
            transform: translateX(10em);
        `: css`
            opacity: 1;
            transform: translateX(0);
        `}
    }
`
const Date = styled.small`
    
`
const InfoTitle = styled.h2`
    margin-bottom: 0;
    margin-top: 0;
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

    &:hover {
        color: white;
        background: black;
    }
`

const Icons = styled.div`
    font-size: 1.3em;
`
const Icon = styled.i`
    margin: 0 0.2em;
`

const Link = styled.a`
    &, &:link,&:visited,&:hover,&:focus,&:active{
        color: inherit;
        text-decoration: none;
    }
`

export default class Project extends React.Component {

    state = {
        inView: false,
    }

    onEnter = () => {
        this.setState({
            inView: true
        });
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
        const { inView } = this.state;

        date = moment(date, "YYYY-MM-DD").fromNow();

        return (
            <InView onEnter={this.onEnter}>
                <ProjectWrapper>
                    <Row>

                        <Col xs={12} md={3}>
                            <ImgWrapper>
                                <Link target="_blank" rel="noopener noreferrer" href={this.props.buttons.length>0? this.props.buttons[0].url:"/"}>
                                    <Img show={inView} src={this.props.img} alt={this.props.title} />
                                </Link>
                            </ImgWrapper>
                        </Col>

                        <Col>
                            <Info show={inView}>
                                <Link target="_blank" rel="noopener noreferrer" href={this.props.buttons.length>0? this.props.buttons[0].url:"/"}>
                                    <InfoTitle>
                                        {this.props.title}
                                    </InfoTitle>
                                </Link>
                                <Date>
                                    {date}
                                </Date>
                                <Icons>
                                    {this.props.group} <Icon className="fas fa-users" /> | 
                                    {
                                        this.props.skills.map((x, i) => <Icon key={i} className={"fab fa-" + x} />)
                                    }
                                </Icons>
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