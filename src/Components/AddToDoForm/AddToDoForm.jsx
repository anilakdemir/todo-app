import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

class AddToDoForm extends React.Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      text: '',
    };
  }

  // update text property in state on every change
  onChange = (e) => {
    // get current text from input
    const text = e.target.value;

    // update state with new text
    this.setState({
      text,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    // get text object from state and addToDo function from props
    const { text } = this.state;
    const { addToDo } = this.props;

    // addToDo object to App's state via inherited function
    addToDo({
      text,
      done: false,
    });

    // set empty string to text property in component's state after adding ToDo
    this.setState({
      text: '',
    });
  }

  render() {
    // get text object from state
    const { text } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Input placeholder="Add New ToDo" onChange={this.onChange} value={text} required width={14}></Form.Input>
          <Form.Button color="green" width={2}>Add</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

AddToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default AddToDoForm;
