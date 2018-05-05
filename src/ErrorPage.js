import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class ThisErrors extends React.Component {
    state = { count: 0 };

    onClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        const { count } = this.state;
        if (count > 3) {
            throw new Error("OH  noewS!");
        }

        return <h1 onClick={this.onClick}>{count}</h1>;
    }
}

const ErrorPage = () => (
    <ErrorBoundary>
        <ThisErrors />
    </ErrorBoundary>
);

export default ErrorPage;
