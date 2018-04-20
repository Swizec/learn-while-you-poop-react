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

const Name = ({ name, hovered }) => (
    <NameStyle hovered={hovered}>{name}</NameStyle>
);

class Message extends React.Component {
    state = {
        read: true
    };

    componentDidMount = () => console.log("Mounted a message");

    render() {
        const { message, hovered } = this.props;

        return (
            <div>
                <Avatar src={message.avatar} />
                <Name name={message.username} hovered={hovered} />
                <Text>{message.text}</Text>
            </div>
        );
    }
}

export default Message;
