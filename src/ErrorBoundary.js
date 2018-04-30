import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        inError: false,
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            inError: true,
            error,
            errorInfo
        });
    }

    render() {
        const { inError, error, errorInfo } = this.state;
        if (inError) {
            console.log(error, errorInfo);
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    {error && error.toString()}
                </div>
            );
        } else {
            // Normally, just render children
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
