import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import RefPage from "./RefPage";
import RenderPropsPage from "./RenderPropsPage";
import ChatroomPage from "./ChatroomPage";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: Math.random() > 0.5 ? "red" : "blue"
};

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div style={styles} className={"button"}>
                    <HomePage />

                    <Route path="/error_boundary" component={ErrorPage} />
                    <Route path="/refs" component={RefPage} />
                    <Route path="/render_props" component={RenderPropsPage} />
                    <Route path="/chatroom" component={ChatroomPage} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
