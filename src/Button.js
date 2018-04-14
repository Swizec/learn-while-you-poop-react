import React from "react";

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

    mouseOver() {
        this.props.onHover();
    }

    mouseOut() {
        this.props.onUnhover();
    }

    render() {
        const { label, rounded } = this.props,
            { wasClicked } = this.state;

        const background = this.props.hovered ? "red" : "white";

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
