import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Router from "./Router";
import Navigation from "./components/Navigation";

import LandingView from "./views/LandingView";
import ProjectsView from "./views/ProjectsView";

import lightTheme from "./themes/light";

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={lightTheme}>
                <BrowserRouter>
                    <div>
                        <Navigation />
                        <Route path="/" exact render={() => <Redirect to="/home" />} />
                        <Route path="/:slug" render={(e) => <Router {...e} pages={
                            [
                                {
                                    "slug": "home",
                                    "view": LandingView
                                },
                                {
                                    "slug": "projects",
                                    "view": ProjectsView
                                },
                                {
                                    "slug": "about",
                                    "view": LandingView
                                },
                                {
                                    "slug": "dinges",
                                    "view": LandingView
                                },
                            ]
                        } />} />
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}
