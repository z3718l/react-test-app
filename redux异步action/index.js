import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import store from "./store";
ReactDOM.render(<App />, document.getElementById("root"));

store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
