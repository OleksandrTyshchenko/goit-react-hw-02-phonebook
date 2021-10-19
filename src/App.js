import React, { Component } from 'react';
import './App.css';
import shortid from 'shortid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';


class App extends Component {
   state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    }

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`)
      return;
    }
  
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  
   changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  
  findContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  render() {
    const { filter, contacts } = this.state;
    const findContacts = this.findContacts
    return (
      <div className="App">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />
        <h2 className="subtitle">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={findContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
 

export default App;
