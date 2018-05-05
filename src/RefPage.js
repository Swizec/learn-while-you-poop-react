import React from "react";
import Video from "./Video";
import AppContext from "./AppContext";

class RefPage extends React.Component {
    state = {
        hoveredMessages: [],
        statusref: React.createRef()
    };
    render() {
        return (
            <AppContext.Provider value={this.state}>
                <React.Fragment>
                    <div ref={this.state.statusref} />
                    <Video />
                </React.Fragment>
            </AppContext.Provider>
        );
    }
}

export default RefPage;
