import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Button,
} from 'semantic-ui-react';


class TodoListItem extends React.Component {
  onRemove = () => {
    // destructure props
    const {
      onRemove,
      todo: { id },
    } = this.props;

    // remove todo item from state
    onRemove(id);
  };

  onUpdate = () => {
    const {
      onUpdate,
      todo,
    } = this.props;

    // change done status
    todo.done = !todo.done;

    // update todo item from state
    onUpdate(todo.id, todo);
  };

  render() {
    // get todo object from props
    const { todo } = this.props;

    // Style object for todo status
    const Style = {
      text: {
        completed: {
          textDecoration: 'line-through',
        },
        active: {
          textDecoration: 'none',
        },
      },
      button: {
        completed: 'google plus',
        active: 'green',
      },
    };

    return (
      <List.Item key={todo.id} index={todo.id}>
        <List.Content
          style={todo.done ? Style.text.completed : Style.text.active}
        >
          {todo.text}
          <Button
            floated="right"
            onClick={this.onRemove}
            circular
            color="google plus"
          >
            -
          </Button>
          <Button
            floated="right"
            circular
            onClick={this.onUpdate}
            color={todo.done ? Style.button.completed : Style.button.active}
          >
            {todo.done ? 'Undone' : 'Done'}
          </Button>

        </List.Content>
      </List.Item>
    );
  }
}

TodoListItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TodoListItem;
