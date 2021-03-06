import React from "react"
import styled, {css} from "styled-components"
import Typist from "react-typist"
import {
    isMobile
} from "react-device-detect"

import Page from '../components/Page'
import {Row, Col} from "../components/Grid"
import Container from "../components/Container"

const H3 = styled.h3`
    padding-top: 2em;
    font-size: 2rem;
    text-align: center;

    @media screen and (min-width: ${({theme}) => theme.breakpoint.sm}) {
        text-align: initial;
    }
`
const Description = styled.p`
    padding-top: 2em;
`
const HR = styled.hr`
    width: 100%;
    margin: 0;

    @media screen and (min-width: ${({theme}) => theme.breakpoint.sm}) {
        width: 50%;
    }
`
const ImgWrapper = styled.div`
    max-width: 512px;
    width: 100%;
    margin: 0 auto;

    @media only screen and (min-width: ${({theme}) => theme.breakpoint.sm}) {
        padding-top: 10em;
        width: 80%;
    }
`
const Img = styled.img`
    height: auto;
    width: 100%;

    transition: opacity 600ms 600ms ease-in-out;
    ${({show}) => !show? css`
        opacity: 0;
    `: css`
        opacity: 1;
    `}
`

const StyledRow = styled(Row)`
    @media only screen and (max-width: ${({theme}) => theme.breakpoint.sm}) {
        flex-direction: column-reverse;
    }
`

export default class AboutView extends React.Component {

    state = {
        picChange: isMobile,
        active: false
    }

    onLineTyped = (line, lineIdx) => {
        if(lineIdx === 3) {
            this.setState({
                picChange: true
            })
        }
    }

    aboutMeText = () => {
        if(isMobile)
            return(
                <Description>
                    This is me.<br/>
                    My name is Leon in 't Veld.<br/><br/>
                    Since I was a child I liked to tinker with stuff, taking things apart and trying to figure out how they work.
                    When I got my first computer I liked to add mods and later make mods for minecraft.
                    I kept doing stuff with software and decided I wanted to do this for the rest of my life.
                    Now I'm a web developer student at ROCMN in Nieuwegein.<br/><br/>

                    I also like to do some other stuff like making a 3d printer, making and flying drones, but most recently I started to play the guitar.
                </Description>
            )

        if(!isMobile) {
            if(this.state.active) {
                return (
                    <Typist onLineTyped={this.onLineTyped} cursor={{show: false}}>
                        <Description>
                            This is me.
                            <Typist.Backspace count={11} delay={500} />
                            Sorry this is my cat.
                            <Typist.Backspace count={21} delay={500} />
                            This is me.<br/>
                            My name is Leon in 't Veld.<br/><br/>
                            Since I was a child I liked to tinker with stuff, taking things apart and trying to figure out how they work.
                            When I got my first computer I liked to add mods and later make mods for minecraft.
                            I kept doing stuff with software and decided I wanted to do this for the rest of my life.
                            Now I'm a web developer student at ROCMN in Nieuwegein.<br/><br/>

                            I also like to do some other stuff like making a 3d printer, making and flying drones, but most recently I started to play the guitar.
                        </Description>
                    </Typist>
                )
            }
            return;
        }
    }

    componentDidUpdate() {
        this.activate()
    }
    componentDidMount() {
        this.activate()
    }

    activate() {
        if(this.props.active && !this.state.active)
            this.setState({
                active: true
            })
    }

    render() {
        return (
            <Page>
                <Container>
                    <StyledRow>
                        <Col xs={12} sm={6}>
                            <ImgWrapper>
                                <Img show={this.state.active} src={!this.state.picChange ? "/img/poekie.jpg" : "/img/me.jpg"} />
                            </ImgWrapper>
                        </Col>
                        <Col xs={12} sm={6}>
                            <H3>
                                About me
                            </H3>
                            <HR />
                            {
                                this.aboutMeText()
                            }
                        </Col>
                    </StyledRow>
                </Container>
            </Page>
        )
    }
}