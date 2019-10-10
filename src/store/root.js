import configureStore from "./configureStore";

const store = configureStore();

store.dispatch({
  type: "ADD_TODO",
  payload: {
    id: Date.now(),
    name: `Todo ${Date.now()}`,
    status: "Todo",
  },
});
store.dispatch({
  type: "LOGGED_IN",
});

export default store;
