import React from "react";
import { connect } from "react-redux";

class MainContaier extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { todos } = this.props;
    const newId = todos.length + 1;
    this.props.dispatch({
      type: "ADD_TODO",
      payload: {
        id: newId,
        name: `Todo ${newId}`,
        status: "Todo",
      },
    });
  }

  render() {
    const { todos, session } = this.props;
    console.log("this.props 1212 r: ", this.props);
    return (
      <div>
        <h1>Main</h1>
        <h2>Logged In: {`${session}`}</h2>
        {todos.map(todo => (
          <div key={todo.id}>{todo.name}</div>
        ))}
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { todos, filter } = state.todo;
  return {
    session: state.user.session,
    todos,
    filter,
  };
};

export default connect(mapStateToProps)(MainContaier);
