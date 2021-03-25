import { useEffect } from 'react';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Container from 'components/Container';

import styles from './App.module.scss';

const App = () => {
  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={styles.App}>
      <Container>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={styles.titleContacts}>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
};

export default App;
