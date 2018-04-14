import React from "react";

const buttonStyles = {
    margin: "10px 10px",
    padding: "10px 20px",
    fontSize: "20px",
    cursor: "pointer"
};

class Button extends React.Component {
    state = {
        wasClicked: false,
        background: "white"
    };

    onClick = () => {
        this.setState({
            wasClicked: true
        });
    };

    mouseOver() {
        this.setState({
            background: "red"
        });
    }

    mouseOut() {
        this.setState({
            background: "white"
        });
    }

    render() {
        const { label, rounded } = this.props,
            { wasClicked, background } = this.state;

        return (
            <button
                style={
                    wasClicked
                        ? { ...buttonStyles, background }
                        : { background }
                }
                onClick={this.onClick}
                onMouseOver={this.mouseOver.bind(this)}
                onMouseOut={() => this.mouseOut()}
            >
                {label}
            </button>
        );
    }
}

export default Button;
