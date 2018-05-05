import React from "react";
import Button from "./Button";
import AppContext from "./AppContext";

class AlertOnClick extends React.Component {
    onClick = () => alert("Hello world");

    render() {
        const Render = this.props.render || this.props.children;
        return (
            <div>
                <Render {...this.props} onClick={this.onClick} />
                <br />
                <small>This will throw an alert</small>
            </div>
        );
    }
}

class RenderPropsPage extends React.Component {
    state = {
        hoveredMessages: [],
        statusref: React.createRef()
    };
    render() {
        return (
            <AppContext.Provider value={this.state}>
                <React.Fragment>
                    <div ref={this.state.statusref} />
                    <p>
                        <AlertOnClick render={Button} label="Alert Hai" />
                        <AlertOnClick>
                            {({ onClick }) => <a onClick={onClick}>Alert</a>}
                        </AlertOnClick>
                    </p>
                </React.Fragment>
            </AppContext.Provider>
        );
    }
}

export default RenderPropsPage;
