import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div>
        <Link to="/error_boundary">Error Example</Link>
        <br />
        <Link to="/refs">Ref Example</Link>
        <br />
        <Link to="/render_props">Render Props & Portals Example</Link>
        <br />
        <Link to="/chatroom">Context etc. Example</Link>
        <br />
    </div>
);

export default HomePage;
