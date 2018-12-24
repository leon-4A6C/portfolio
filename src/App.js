import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Router from "./Router";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo"

import LandingView from "./views/LandingView";
import ProjectsView from "./views/ProjectsView";

import themes from "./themes";

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
                    <div>
                        <Logo />
                        <Navigation />
                        <Route path="/" exact render={() => <Redirect to="/home" />} />
                        <Route path="/:slug" render={(e) => <Router {...e} themeChange={this.setTheme} pages={
                            [
                                {
                                    "slug": "home",
                                    "view": LandingView,
                                    "theme": themes["orange"]
                                },
                                {
                                    "slug": "projects",
                                    "view": ProjectsView,
                                    "theme": themes["green"]
                                },
                                {
                                    "slug": "about",
                                    "view": LandingView,
                                    "theme": themes["orange"]
                                },
                                {
                                    "slug": "dinges",
                                    "view": LandingView,
                                    "theme": themes["green"]
                                },
                            ]
                        } />} />
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}
