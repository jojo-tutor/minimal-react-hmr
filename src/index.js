import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

function App(props) {
  return <div>123344wfsdf</div>;
}

const HotApp = hot(module)(App);

ReactDOM.render(<HotApp />, document.getElementById("root"));
