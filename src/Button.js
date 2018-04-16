import React from "react";

import AppContext from "./AppContext";

const buttonStyles = {
    margin: "10px 10px",
    padding: "10px 20px",
    fontSize: "20px",
    cursor: "pointer"
};

class Button extends React.Component {
    state = {
        wasClicked: false
    };

    onClick = () => {
        this.setState({
            wasClicked: true
        });
    };

    render() {
        const { label, rounded } = this.props,
            { wasClicked } = this.state;

        return (
            <AppContext.Consumer>
                {state => (
                    <button
                        style={
                            wasClicked
                                ? {
                                      ...buttonStyles,
                                      background: state.hoveredMessages[0]
                                          ? "red"
                                          : "white"
                                  }
                                : {
                                      background: state.hoveredMessages[0]
                                          ? "red"
                                          : "white"
                                  }
                        }
                        onClick={this.onClick}
                        onMouseOver={state.onHover}
                        onMouseOut={state.onUnhover}
                    >
                        {label}
                    </button>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Button;
