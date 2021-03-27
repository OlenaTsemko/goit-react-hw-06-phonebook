// с использованием хуков
import { useSelector } from 'react-redux';

import { getContactsToShow } from 'redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem';
import styles from './ContactList.module.scss';

const ContactList = () => {
  // перенесла в контактс-селекторс
  // const getContactsToShow = (allContacts, filter) => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return allContacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const contacts = useSelector(({ contacts: { items, filter } }) =>
  //   getContactsToShow(items, filter),
  // );

  const contacts = useSelector(getContactsToShow);

  return contacts.length === 0 ? (
    <p className={styles.notification}>Contact book is empty</p>
  ) : (
    <ul className={styles.ContactList}>
      {contacts.map(contact => {
        const { id } = contact;

        return <ContactItem key={id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;

// =========================================================================
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import ContactItem from '../ContactItem';
// import styles from './ContactList.module.scss';

// const ContactList = ({ contacts }) =>
//   contacts.length === 0 ? (
//     <p className={styles.notification}>Contact book is empty</p>
//   ) : (
//     <ul className={styles.ContactList}>
//       {contacts.map(contact => {
//         const { id } = contact;

//         return <ContactItem key={id} contact={contact} />;
//       })}
//     </ul>
//   );

// ContactList.defaultProps = {
//   contacts: [],
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };

// // selector
// const getContactsToShow = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getContactsToShow(items, filter),
// });

// export default connect(mapStateToProps)(ContactList);
