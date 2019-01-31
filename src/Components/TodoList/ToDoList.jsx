import React from 'react';
import {
  List,
  Container,
} from 'semantic-ui-react';
import TodoListItem from './ToDoListItem';


class TodoList extends React.Component {
  renderList = todos => todos.map(todo => (
    <TodoListItem key={todo.id} todo={todo} onRemove={this.props.onRemove} onUpdate={this.props.onUpdate} />
  ));

  renderEmptyList = () => (
    <Container textAlign="center">
          Add Some Tasks!
    </Container>
  );

  render() {
    // TODO: add react/prop-types to project
    const { todos } = this.props; // eslint-disable-line react/prop-types

    const renderedList = (!todos || todos.length === 0) ? this.renderEmptyList() : this.renderList(todos);

    return (
      <List fluid="true" selection verticalAlign="middle">
        {renderedList}
      </List>
    );
  }
}

export default TodoList;
