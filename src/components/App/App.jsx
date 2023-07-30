import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    let flag = false;
    this.state.contacts.forEach(contact => {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        flag = true;
      }
    });
    if (flag) return alert(`${name} is already in contacts`);
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltered = () => {
    const { filter, contacts } = this.state;
    const standartizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(standartizedFilter)
    );
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>

        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList
          onDeleteContact={this.deleteContact}
          filteredContacts={this.getFiltered()}
        />
      </Container>
    );
  }
}
export default App;
