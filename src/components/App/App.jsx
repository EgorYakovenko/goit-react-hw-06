import css from './App.module.css';
import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [contacts, setContact] = useState(() => {
    const loadStorage = localStorage.getItem('contactList');
    return loadStorage !== null ? JSON.parse(loadStorage) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContact(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const removeContact = contactId => {
    setContact(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const searchContakt = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className={css.container}>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList
          contacts={contacts}
          searchContakt={searchContakt}
          removeContact={removeContact}
        />
      </div>
    </>
  );
}

export default App;
