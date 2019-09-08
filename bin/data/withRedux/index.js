module.exports.indexWithRedux = {
content: `import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import App from "./app/App";
import history from "./app/history";
import "./index.css";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);`

}