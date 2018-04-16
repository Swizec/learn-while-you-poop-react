import React from "react";

import AppContext from "./AppContext";

const Avatar = ({ src }) => <img src={src} style={{ width: "100px" }} />;

const Text = ({ children, style }) => <p style={style}>{children}</p>;

const Name = ({ name }) => (
    <AppContext.Consumer>
        {({ hoveredMessages }) => (
            <Text style={{ background: hoveredMessages[0] ? "red" : "white" }}>
                <b>{name}</b>
            </Text>
        )}
    </AppContext.Consumer>
);

class Message extends React.Component {
    state = {
        read: true
    };

    randomProperty = 1234;

    componentDidMount = () => console.log("Mounted a message");

    render() {
        const { message } = this.props;

        return (
            <div>
                {this.state.read ? <p>Already read this message</p> : null}
                <Avatar src={message.avatar} />
                <Name name={message.username} />
                <Text>{message.text}</Text>
            </div>
        );
    }
}

export default Message;
