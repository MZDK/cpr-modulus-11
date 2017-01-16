import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

import './Form.css'

const genders = [
  { text: 'Mand', value: 'male' },
  { text: 'Kvinde', value: 'female' },
]

class PersonalInformationsForm extends Component {

  state = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: ""
  }

  handleInputChange(e) {
    const name = e.target.getAttribute('name');
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleDropdownChange(_, dropdown) {
    const name = dropdown.name;
    const value = dropdown.value;
    this.setState({ [name]: value });
  }

  handleValidation(ref) {
    const form = ref._form;
    const button = form.querySelector('button[type="submit"]');
    const valid = this.state.firstName && this.state.lastName && this.state.dateOfBirth && this.state.gender ? true : false;
    if(valid) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', 'disabled');
    }
  }

  componentDidMount() {
    this.handleValidation(this.refs.form);
  }

  componentDidUpdate() {
    this.handleValidation(this.refs.form);
  }

  render() {
    return (
      <div className='Form'>
        <Form className='attached fluid segment' ref='form' onSubmit={this.props.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input label='Fornavn' name='firstName' placeholder='Indtast fornavn' value={this.state.firstName} onChange={this.handleInputChange.bind(this)} />
            <Form.Input label='Efternavn' name='lastName' placeholder='Indtast efternavn' value={this.state.lastName} onChange={this.handleInputChange.bind(this)} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='Fødseldato' name='dateOfBirth' placeholder='Indtast fødselsdato (DDMMÅÅ)' value={this.state.dateOfBirth} onChange={this.handleInputChange.bind(this)} />
            <Form.Select label='Køn' name='gender' options={genders} placeholder='Vælg køn' value={this.state.gender} onChange={this.handleDropdownChange.bind(this)} />
          </Form.Group>
          <Button primary type='submit'>Søg</Button>
        </Form>
      </div>
    );
  }
}

export default PersonalInformationsForm;
