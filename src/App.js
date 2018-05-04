import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Button from "./Button";
import Message from "./Message";
import AppContext from "./AppContext";
import Video from "./Video";
import Faker from "faker";
import ClickLogger from "./clickLogger";
import ErrorBoundary from "./ErrorBoundary";
import MessageForm from "./MessageForm";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: Math.random() > 0.5 ? "red" : "blue"
};

const Link = ({ href, children }) => (
    <a href={href}>{children || "Click on me"}</a>
);

const caturl = "https://thecatapi.com/api/images/get?format=src&type=png";

const LoggedButton = ClickLogger(Button);

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
class AlertOnClick extends React.Component {
    onClick = () => alert("Hello world");

    render() {
        const Render = this.props.render || this.props.children;
        return (
            <div>
                <Render {...this.props} onClick={this.onClick} />
                <br />
                <small>This will throw an alert</small>
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        hoveredMessages: {
            0: false,
            1: false
        },
        messages: [
            {
                avatar: `${caturl}&r=${Math.random()}`,
                username: "Swizec",
                text: "Hello world"
            },
            {
                avatar: `${caturl}&r=${Math.random()}`,
                username: "Twitter Person",
                text: "I am tweeting in many characters"
            }
        ],
        statusref: React.createRef(),
        onHover: () => {
            const { messages } = this.state,
                pivot = Math.floor(messages.length / 2);

            this.setState({
                hoveredMessages: {
                    ...this.state.hoveredMessages,
                    [pivot]: true
                }
            });
        },

        onUnhover: () => {
            let { hoveredMessages } = this.state;

            Object.keys(hoveredMessages).forEach(
                k => (hoveredMessages[k] = false)
            );

            this.setState({
                hoveredMessages
            });
        }
    };

    addCat = ({ username, text }) =>
        this.setState({
            messages: [
                ...this.state.messages,
                {
                    avatar: `${caturl}&r=${Math.random()}`,
                    username: username || Faker.name.findName(),
                    text: text || Faker.lorem.slug()
                }
            ]
        });

    removeCat = () => {
        const { messages } = this.state,
            pivot = Math.floor(messages.length / 2);

        this.setState({
            messages: [
                ...messages.slice(0, pivot),
                ...messages.slice(pivot + 1)
            ]
        });
    };

    render() {
        const { messages } = this.state;

        return (
            <div style={styles} className={"button"}>
                <ErrorBoundary>
                    <ThisErrors />
                </ErrorBoundary>
                <div ref={this.state.statusref} />
                <AppContext.Provider value={this.state}>
                    <Hello name="CodeSandbox" style={{ color: "black" }} />
                    <h2>Start editing to see some magic happen {"\u2728"}</h2>
                    <AlertOnClick render={Button} label="Alert Hai" />
                    <AlertOnClick>
                        {({ onClick }) => <a onClick={onClick}>Alert</a>}
                    </AlertOnClick>

                    <Video />
                    <div>
                        <LoggedButton
                            label="Remove Cat"
                            hovered={this.state.hoveredMessages[0]}
                            onClick={this.removeCat}
                        />
                        <Button label="Add Cat" onClick={this.addCat} />
                    </div>
                    <p>
                        This crazy fox jumped over a lazy dog{" "}
                        <Link href="facebook.com" />
                        <Link href="https://google.com">
                            Google <b> Bold </b>
                        </Link>
                        <Link href="codesandbox.io">Sandbox</Link>
                    </p>
                    <div>
                        {messages.map((message, index) => (
                            <Message
                                message={message}
                                hovered={this.state.hoveredMessages[index]}
                            />
                        ))}
                    </div>
                    <MessageForm submit={this.addCat} />
                </AppContext.Provider>
            </div>
        );
    }
}

export default App;
