import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addNewContact = createAction(
  'contacts/addContact',
  (name, number) => ({
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  }),
);
export const deleteContact = createAction('contacts/deleteContact');
export const changeFilter = createAction('contacts/changeFilter');

// =================================================
// import shortid from 'shortid';
// import contactsTypes from './contacts-types';

// export const addNewContact = (name, number) => ({
//   type: contactsTypes.ADD_CONTACT,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: contactsTypes.DELETE_CONTACT,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: contactsTypes.CHANGE_FILTER,
//   payload: value,
// });
