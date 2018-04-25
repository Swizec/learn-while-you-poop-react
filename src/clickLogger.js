import React from "react";

function clickLogger(WrappedComponent) {
    return class ClickLogged extends React.Component {
        onClick = () => {
            console.log("Clicked!");
            this.props.onClick();
        };

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default clickLogger;
