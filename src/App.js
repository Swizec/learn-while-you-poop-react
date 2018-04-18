import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Button from "./Button";
import Message from "./Message";
import AppContext from "./AppContext";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: Math.random() > 0.5 ? "red" : "blue"
};

const Link = ({ href, children }) => (
    <a href={href}>{children || "Click on me"}</a>
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

class App extends React.Component {
    state = {
        hoveredMessages: {
            0: false,
            1: false
        },
        onHover: () =>
            this.setState({
                hoveredMessages: {
                    ...this.state.hoveredMessages,
                    0: true
                }
            }),

        onUnhover: () =>
            this.setState({
                hoveredMessages: {
                    ...this.state.hoveredMessages,
                    0: false
                }
            })
    };

    render() {
        return (
            <div style={styles} className={"button"}>
                <AppContext.Provider value={this.state}>
                    <Hello name="CodeSandbox" style={{ color: "black" }} />
                    <h2>
                        {" "}
                        Start editing to see some magic happen {"\u2728"}{" "}
                    </h2>{" "}
                    <div>
                        <Button
                            label="Click Me"
                            hovered={this.state.hoveredMessages[0]}
                        />{" "}
                    </div>{" "}
                    <p>
                        This crazy fox jumped over a lazy dog{" "}
                        <Link href="facebook.com" />
                        <Link href="https://google.com">
                            Google <b> Bold </b>{" "}
                        </Link>{" "}
                        <Link href="codesandbox.io"> Sandbox </Link>{" "}
                    </p>{" "}
                    <div>
                        {" "}
                        {messages.map((message, index) => (
                            <Message
                                message={message}
                                hovered={this.state.hoveredMessages[index]}
                            />
                        ))}{" "}
                    </div>{" "}
                </AppContext.Provider>
            </div>
        );
    }
}

export default App;
