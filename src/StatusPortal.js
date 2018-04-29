import React from "react";
import AppContext from "./AppContext";
import ReactDOM from "react-dom";
import App from "./App";

class StatusPortal extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
                {({ statusref }) =>
                    statusref.current &&
                    ReactDOM.createPortal(
                        <p>Clicked: {this.props.label}</p>,
                        statusref.current
                    )
                }
            </AppContext.Consumer>
        );
    }
}

export default StatusPortal;
