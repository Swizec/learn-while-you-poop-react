import React from "react";

class MessageForm extends React.Component {
    state = {
        username: "",
        text: ""
    };

    onChangeUsername = event =>
        this.setState({
            username: event.target.value
        });

    onChangeText = event =>
        this.setState({
            text: event.target.value
        });

    onSubmit = event => {
        event.preventDefault();
        this.props.submit(this.state);
    };

    render() {
        const { username, text } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={this.onChangeUsername}
                    />
                </div>
                <div>
                    <label>Text: </label>
                    <br />
                    <textarea onChange={this.onChangeText}>{text}</textarea>
                </div>
                <input type="submit" />
            </form>
        );
    }
}

export default MessageForm;
