import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Container from 'components/Container';

import styles from './App.module.scss';

const App = () => (
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

export default App;
