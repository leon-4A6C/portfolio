import React from "react";
import Swipeable from 'react-swipeable'

// import styled from "styled-components";

import LandingView from "./views/LandingView";

export default class Router extends React.Component {

    state = {
        scrollPos: {
            y: 0
        },
        scrollCount: 0
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.scrollPos.y !== this.state.scrollPos.y) {
            window.scrollTo({
                top: this.state.scrollPos.y, 
                behavior: "smooth"
            })
        }
    }

    handleScroll = (e) => {
        if(this.state.scrollCount < 5) {
            this.setState({
                scrollCount: this.state.scrollCount + 1
            });
            return
        }

        if(e.deltaY > 1) {
            this.pageUp()
        } else {
            this.pageDown()
        }

        this.setState({
            scrollCount: 0
        })
    };

    pageUp = () => {
        let y = this.state.scrollPos.y + window.innerHeight;
        if(y > document.documentElement.scrollHeight) {
            y = document.documentElement.scrollHeight;
        }
        this.setState({...this.state, scrollPos:{y: y}})
    }

    pageDown = () => {
        let y = this.state.scrollPos.y - window.innerHeight;
        if(y < 0) {
            y = 0;
        }
        this.setState({...this.state, scrollPos:{y: y}})
    }

    componentDidMount() {
        console.log(this.props.children);
    }

    render() {
        return (
            <div onWheel={this.handleScroll}>
                <Swipeable onSwipedUp={this.pageUp} onSwipedDown={this.pageDown}>
                        <LandingView path="/home" />
                        <LandingView path="/projects" />
                        <LandingView path="/about" />
                        <LandingView path="/dinges" />
                </Swipeable>
            </div>
        )
    }
}