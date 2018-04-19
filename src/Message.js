import React from "react";
import styled from "styled-components";

import AppContext from "./AppContext";

const NarrowImage = styled.img`
    width: 150px;
`;

const NameStyle = styled.p`
    font-weight: bold;
    ${props => (props.hovered ? "background: red" : null)};
`;

const Button = styled.button`
    border-radius: 10px;
`;

const ButtonPrimary = Button.extend`
    background: red;
`;

const Avatar = ({ src }) => <NarrowImage src={src} />;

const Text = ({ children, style }) => <p style={style}>{children}</p>;

const Name = ({ name }) => (
    <AppContext.Consumer>
        {({ hoveredMessages }) => (
            <NameStyle hovered={hoveredMessages[0]}>{name}</NameStyle>
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
