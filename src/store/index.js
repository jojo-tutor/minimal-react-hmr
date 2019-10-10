import { combineReducers } from "redux";

const types = {
  ADD_TODO: "ADD_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  CHANGE_FILTER: "CHANGE_FILTER",
  SORT_TODOS: "SORT_TODOS",
  LOGGED_IN: "LOGGED_IN",
};

export const initialUser = {
  users: [
    {
      id: 1,
      email: "john@doe.com",
      first_name: "John",
      last_name: "Doe",
    },
  ],
  session: false,
  new: {},
};

function user(state = initialUser, action) {
  switch (action.type) {
    case types.LOGGED_IN:
      return { ...state, session: true };
    default:
      return state;
  }
}

export const initialTodos = {
  todos: [
    {
      id: 1,
      name: "Todo 1",
      status: "Todo",
    },
  ],
  filter: "All",
};

function todo(state = initialTodos, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case types.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case types.SORT_TODOS:
      const todosIds = action.payload.map(todo => todo.id);
      const excludedTodos = state.todos.filter(
        todo => !todosIds.includes(todo.id),
      );
      return {
        ...state,
        todos: [...action.payload, ...excludedTodos],
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  todo,
  user,
});

export default rootReducer;
