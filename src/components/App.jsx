import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
   //  console.log(contact);
    this.setState(prevState => {
      // console.log(prevState);
      return { contacts: [contact, ...prevState.contacts] };
    });
  };
  deleteContact = code => {
   //  console.log(code);
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(({ id }) => id !== code) };
    });
  };
  isFilterContacts = wordFilter => {
   //  console.log(wordFilter);
    this.setState({ filter: wordFilter.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    const contactsAfterFiltr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
   //  console.log(this.state);
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />

        <h2>Contacts</h2>
        <Filter isFilter={this.isFilterContacts} />
        <ContactList
          contacts={contactsAfterFiltr}
          isDelete={this.deleteContact}
        />
      </div>
    );
  }
}
