import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PhoneInput from 'react-phone-number-input';

import * as contactsActions from 'redux/contacts/contacts-actions';

import styles from './ContactForm.module.scss';
import 'react-phone-number-input/style.css';

const ContactForm = ({ contacts, onSubmit }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setContactName(value);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!contactName || !contactNumber) {
      alert('Please enter the correct name and number');
      return;
    }

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

    onSubmit(contactName, contactNumber);
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
        />
      </label>

      <button className={styles.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addNewContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
