


module.exports.indexWithoutRedux = {

    content: 
`import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./app/App";
import history from "./app/history";
import "./index.css";

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById("root")
);
`
}
