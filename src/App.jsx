import React from 'react';
import _ from 'lodash';
import { Grid, Segment } from 'semantic-ui-react';
import TodoList from './Components/TodoList/ToDoList';
import AddToDoForm from './Components/AddToDoForm/AddToDoForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  addToDo = (newToDo) => {
    // if newToDo is not object then do nothing
    if (!newToDo && typeof newToDo !== 'object') return;

    // add an unique id to new todo item
    newToDo.id = new Date().getTime() + _.random(0, 1000);

    // get a copy of the todos array from state
    const { todos } = this.state;

    // push new todo item into todos array
    todos.push(newToDo);

    // set state with new todos array
    this.setState({
      todos,
    });
  }

  removeToDo = (id) => {
    // if id is not number then do nothing
    if (!id && typeof id !== 'number') return;

    // get a copy of the todos array from state
    const { todos } = this.state;

    // delete todo
    _.remove(todos, todo => todo.id === id);

    // set state with new todos array
    this.setState({
      todos,
    });
  }

  updateToDo = (id, updatedToDo) => {
    // if id is not number then do nothing
    if (!id && typeof id !== 'number') return;

    // if updatedToDo is not object then do nothing
    if (!updatedToDo && typeof updatedToDo !== 'object') return;

    // get a copy of the todos array from state
    const { todos } = this.state;

    // find the index of todo which is wanted to be deleted
    const index = todos.findIndex(todo => todo.id === id);

    // if index can't be found then do nothing
    if (!Number.isInteger(index) || !(index >= 0)) return;

    // set id property
    updatedToDo.id = id;

    // update todo list with updatedToDo
    todos[index] = updatedToDo;

    // set state with new todos array
    this.setState({
      todos,
    });
  }


  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Grid centered columns="2">
          <Grid.Column>
            <Segment attached="top">
              <AddToDoForm addToDo={this.addToDo} />
            </Segment>
            <Segment raised stacked attached="bottom">
              <TodoList
                todos={todos}
                onRemove={this.removeToDo}
                onUpdate={this.updateToDo}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
