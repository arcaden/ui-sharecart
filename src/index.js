import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import Root from "./components/Root";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

render(<Root store={store} />, document.getElementById("root"));
