import React from "react";

import AppContext from "./AppContext";
import "./button.module.less";

//console.log(styles);

const buttonStyles = {
    margin: "10px 10px",
    padding: "10px 20px",
    fontSize: "20px",
    cursor: "pointer"
};

function blaDec(wrapped) {
    return function() {
        return wrapped.apply(this, arguments);
    };
}

class Button extends React.Component {
    state = {
        wasClicked: false
    };

    onClick = () => {
        this.setState({
            wasClicked: true
        });
    };

    @blaDec
    test() {
        console.log("hai");
    }

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
                        className={"button"}
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
