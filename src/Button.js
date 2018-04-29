import React from "react";

import AppContext from "./AppContext";
import styles from "./button.module.css";
import StatusPortal from "./StatusPortal";

class Button extends React.Component {
    state = {
        wasClicked: false
    };

    onClick = ({ statusref }) => {
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
                    <React.Fragment>
                        <button
                            style={{
                                background: state.hoveredMessages[0]
                                    ? "red"
                                    : "white"
                            }}
                            className={styles.greenButton}
                            onClick={this.onClick}
                            onMouseOver={state.onMouseOver}
                            onMouseOut={state.onUnhover}
                        >
                            {label}
                        </button>
                        {wasClicked ? <StatusPortal label={label} /> : null}
                    </React.Fragment>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Button;
