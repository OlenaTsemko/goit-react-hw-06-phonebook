// с использованием хуков
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PhoneInput from 'react-phone-number-input';

import * as contactsActions from 'redux/contacts/contacts-actions';
import { getContacts } from 'redux/contacts/contacts-selectors';

import styles from './ContactForm.module.scss';
import 'react-phone-number-input/style.css';

const ContactForm = () => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // const contacts = useSelector(state => state.contacts.items);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setContactName(value);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    // if (!contactName || !contactNumber) {
    //   alert('Please enter the correct name and number');
    //   return;
    // }

    const checkSameName = contacts.find(({ name }) => name === contactName);

    const checkSameNumber = contacts.find(
      ({ number }) => number === contactNumber,
    );

    if (checkSameNumber) {
      const { name, number } = checkSameNumber;
      alert(`This number already exists: "${name}: ${number}"`);
      return;
    }

    if (checkSameName) {
      alert(`${contactName} is already in contacts`);
      return;
    }

    dispatch(contactsActions.addNewContact(contactName, contactNumber));
    reset();
  };

  const reset = () => {
    setContactName('');
    setContactNumber('');
  };

  return (
    <form className={styles.ContactForm} onSubmit={handleFormSubmit}>
      <label className={styles.formLabel}>
        <span className={styles.formText}>Name</span>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter contact's name"
          name="name"
          value={contactName}
          onChange={handleChange}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.formLabel}>
        <span className={styles.formText}>Number</span>
        <PhoneInput
          value={contactNumber}
          onChange={setContactNumber}
          defaultCountry="UA"
          international
          autoComplete="off"
          // такой вариант с плагином не фурычит :)
          // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          // title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          pattern="((\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?)"
          title="Номер телефона должен состоять из 10-14 цифр, может содержать цифры и может начинаться с +"
          required
        />
      </label>

      <button className={styles.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

// ========================================================================================
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import PhoneInput from 'react-phone-number-input';

// import * as contactsActions from 'redux/contacts/contacts-actions';

// import styles from './ContactForm.module.scss';
// import 'react-phone-number-input/style.css';

// const ContactForm = ({ contacts, onSubmit }) => {
//   const [contactName, setContactName] = useState('');
//   const [contactNumber, setContactNumber] = useState('');

//   const handleChange = event => {
//     const { name, value } = event.currentTarget;
//     if (name === 'name') {
//       setContactName(value);
//     }
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();

//     if (!contactName || !contactNumber) {
//       alert('Please enter the correct name and number');
//       return;
//     }

//     const checkSameName = contacts.find(({ name }) => name === contactName);

//     const checkSameNumber = contacts.find(
//       ({ number }) => number === contactNumber,
//     );

//     if (checkSameNumber) {
//       const { name, number } = checkSameNumber;
//       alert(`This number already exists: "${name}: ${number}"`);
//       return;
//     }

//     if (checkSameName) {
//       alert(`${contactName} is already in contacts`);
//       return;
//     }

//     onSubmit(contactName, contactNumber);
//     reset();
//   };

//   const reset = () => {
//     setContactName('');
//     setContactNumber('');
//   };

//   return (
//     <form className={styles.ContactForm} onSubmit={handleFormSubmit}>
//       <label className={styles.formLabel}>
//         <span className={styles.formText}>Name</span>
//         <input
//           className={styles.formInput}
//           type="text"
//           placeholder="Enter contact's name"
//           name="name"
//           value={contactName}
//           onChange={handleChange}
//           autoComplete="off"
//         />
//       </label>
//       <label className={styles.formLabel}>
//         <span className={styles.formText}>Number</span>
//         <PhoneInput
//           value={contactNumber}
//           onChange={setContactNumber}
//           defaultCountry="UA"
//           international
//           autoComplete="off"
//         />
//       </label>

//       <button className={styles.formBtn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsActions.addNewContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
