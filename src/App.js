import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Router from "./Router";

import LandingView from "./views/LandingView";

import lightTheme from "./themes/light";

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={lightTheme}>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact render={() => <Redirect to="/home" />} />
                        <Route path="/:slug" render={(e) => <Router {...e} pages={
                            [
                                {
                                    "path": "/home",
                                    "view": LandingView
                                },
                                {
                                    "path": "/projects",
                                    "view": LandingView
                                },
                                {
                                    "path": "/about",
                                    "view": LandingView
                                },
                                {
                                    "path": "/dinges",
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
