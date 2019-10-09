import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";

function App(props) {
  return <div>DEE22</div>;
}

const WithHot = hot(module)(App);

ReactDOM.render(<WithHot />, document.getElementById("root"));
