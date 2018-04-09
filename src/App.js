import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const Link = ({ href, children }) => (
    <a href={href}>{children || "Click on me"}</a>
);

const Avatar = ({ src }) => <img src={src} style={{ width: "100px" }} />;

const Text = ({ children }) => <p>{children}</p>;

const Name = ({ name }) => (
    <Text>
        <b>{name}</b>
    </Text>
);

const Message = ({ message }) => (
    <div>
        <Avatar src={message.avatar} />
        <Name name={message.username} />
        <Text>{message.text}</Text>
    </div>
);

const messages = [
    {
        avatar: "https://thecatapi.com/api/images/get?format=src&type=png",
        username: "Swizec",
        text: "Hello world"
    },
    {
        avatar: "https://thecatapi.com/api/images/get?format=src&type=png",
        username: "Twitter Person",
        text: "I am tweeting in many characters"
    }
];

const App = () => (
    <div style={styles}>
        <Hello name="CodeSandbox" />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
        <p>
            This crazy fox jumped over a lazy dog <Link href="facebook.com" />
            <Link href="https://google.com">
                Google <b>Bold</b>
            </Link>
            <Link href="codesandbox.io">Sandbox</Link>
        </p>
        <div>{messages.map(message => <Message message={message} />)}</div>
    </div>
);

export default App;
