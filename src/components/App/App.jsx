import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    contacts: [
      
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
  componentDidMount() { 
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts
      });
    }
    
   }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>

        <Filter value={filter} onChange={this.changeFilter} />
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
