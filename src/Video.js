import React from "react";
import Button from "./Button";

class Video extends React.Component {
    videoref = React.createRef();

    play = () => this.videoref.current.play();

    render() {
        return (
            <div>
                <video
                    src="http://localhost:3000/screen-vid.mp4"
                    width={640}
                    height={480}
                    ref={this.videoref}
                />
                <Button label="Play" onClick={this.play} />
            </div>
        );
    }
}

export default Video;
