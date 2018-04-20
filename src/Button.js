import React from "react";

import AppContext from "./AppContext";
import styles from "./button.module.css";

class Button extends React.Component {
    state = {
        wasClicked: false
    };

    onClick = () => {
        this.setState({
            wasClicked: true
        });
        this.props.onClick && this.props.onClick();
    };

    render() {
        const { label, rounded } = this.props,
            { wasClicked } = this.state;

        return (
            <AppContext.Consumer>
                {state => (
                    <button
                        style={{
                            background: state.hoveredMessages[0]
                                ? "red"
                                : "white"
                        }}
                        className={styles.greenButton}
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
