import React from 'react';
import {
  List,
  Button,
} from 'semantic-ui-react';


class TodoListItem extends React.Component {
  onRemove = () => {
    const { onRemove } = this.props;
    const { id } = this.props.todo;

    // remove todo item from state
    onRemove(id);
  };

  onUpdate = () => {
    const { onUpdate } = this.props;
    const { todo } = this.props;

    // change done status
    todo.done = !todo.done;

    // update todo item from state
    onUpdate(todo.id, todo);
  };

  render() {
    // TODO: add react/prop-types to project
    const { todo } = this.props; // eslint-disable-line react/prop-types


    return (
      <List.Item key={todo.id} index={todo.id}>
        <List.Content>{todo.text}</List.Content>
        <List.Content floated="right">
          <Button onClick={this.onUpdate} circular color="green">Done</Button>
          <Button onClick={this.onRemove} circular color="google plus">-</Button>
        </List.Content>
      </List.Item>
    );
  }
}

export default TodoListItem;
