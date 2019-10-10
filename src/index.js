import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import store from "./store/root";
// import configureStore from "./store/configureStore";
import MainContainer from "./MainContainer";

// const store = configureStore();
// const state = store.getState();
// console.log("state: ", state);

// store.dispatch({
//   type: "ADD_TODO",
//   payload: {
//     id: Date.now(),
//     name: `Todo ${Date.now()}`,
//     status: "Todo",
//   },
// });
// store.dispatch({
//   type: "LOGGED_IN",
// });

if (module.hot) {
  console.log("@@@@@@ HOTTT", module.hot.status());
}

function App(props) {
  return <MainContainer />;
}

const HotApp = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <HotApp />
  </Provider>,
  document.getElementById("root"),
);
