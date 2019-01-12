import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import "./index.css";

import Router from "./components/Router";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo"

import LandingView from "./views/LandingView";
import ProjectsView from "./views/ProjectsView";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";

import themes from "./themes";

const Main = styled.div`
    background: ${({theme}) => theme.color.bg};
`

const pages = [
    {
        "slug": "home",
        "view": LandingView,
        "theme": themes["orange"]
    },
    {
        "slug": "projects",
        "view": ProjectsView,
        "theme": themes["orange"]
    },
    {
        "slug": "about",
        "view": AboutView,
        "theme": themes["orange"]
    },
    {
        "slug": "contact",
        "view": ContactView,
        "theme": themes["orange"]
    },
]

export default class App extends Component {

    state = {
        color: themes["orange"]
    }

    setTheme = (theme) => {
        this.setState({
            color: theme
        })
    }

    render() {

        const theme = {...themes, color: this.state.color}

        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Main>
                        <Logo />
                        <Navigation pages={pages} />
                        <Route path="/" exact render={() => <Redirect to="/home" />} />
                        <Route path="/:slug" render={(e) => <Router {...e} themeChange={this.setTheme} pages={pages} />} />
                    </Main>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}
