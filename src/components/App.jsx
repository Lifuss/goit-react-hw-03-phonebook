import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import getFilteredData from '../Helpers/getFilteredData';
import { StyledDiv } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const items = JSON.parse(localStorage.getItem('contacts'));
    if (items?.length) {
      this.setState({ contacts: items });
    }
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  // test htmlFor *_*
  nameInputId = crypto.randomUUID();
  phoneInputId = crypto.randomUUID();

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    if (this.state.contacts.find(user => user.name === name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    this.setState(
      prev => ({
        contacts: [
          ...prev.contacts,
          {
            name: name.value,
            number: number.value,
            id: crypto.randomUUID(),
          },
        ],
      }),
      () => {
        e.target.reset();
      }
    );
  };
  handleInput = e => {
    this.setState({ filter: e.target.value });
  };
  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredData = getFilteredData(contacts, filter);
    return (
      <StyledDiv>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          phoneInputId={this.phoneInputId}
          nameInputId={this.nameInputId}
        />

        <h2>Contacts</h2>
        <Filter onChange={this.handleInput} />
        <ContactList contacts={filteredData} onDelete={this.handleDelete} />
      </StyledDiv>
    );
  }
}
