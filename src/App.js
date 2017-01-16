import React, { Component } from 'react';
import { Container, Message } from 'semantic-ui-react';

import Calculator from './scripts/calculator'

import Form from './components/form/Form';
import List from './components/list/List';

import './App.css';


class App extends Component {atom

  state = {
    formData: {},
    cprList: []
  }

  handleSubmit = (event, { formData }) => {
    event.preventDefault()
    this.handleCalculation(formData)
  }

  handleCalculation = (formData) => {
    const cprList = Calculator.init(formData.dateOfBirth, formData.gender);
    this.setState({
      formData: formData,
      cprList: cprList
    })
  }

  render() {
    return (
      <div className='App'>
        <Container text>
          <Message
            attached
            header='Hvad er dit CPR-nummer?'
            content='Tag "Modulus 11"-testen.'
          />
          <Form handleSubmit={this.handleSubmit} />
          <List cprList={this.state.cprList} formData={this.state.formData} />
        </Container>
      </div>
    );
  }
}

export default App;
