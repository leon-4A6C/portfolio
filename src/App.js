import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";

import Router from "./Router";

import lightTheme from "./themes/light";

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={lightTheme}>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact render={() => <Redirect to="/home" />} />
                        <Route path="/:id" component={Router} />
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}
