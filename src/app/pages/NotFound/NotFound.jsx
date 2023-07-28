import React from "react";

import './NotFound.css';
import Header from "../../components/utils/Header";

function NotFound() {
    return (
        <div>
            <Header/>
            <div className="not-found-main">
                <h1>404</h1>
                <p><span>Not</span> found</p>
            </div>
        </div>
    );
}

export default NotFound;