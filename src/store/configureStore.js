import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./index";

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools());

  if (module.hot) {
    module.hot.accept("./index", () => {
      const nextRootReducer = require("./index").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
