import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import middleware from './middleware';
import contactsPersistConfig from './contacts/contacts-persist-config';
import contactsReducer from './contacts/contacts-reducer';

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { store, persistor };

// ===========================================================
// до redux-persist
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

// import contactsReducer from './contacts/contacts-reducer';

// const middleware = [...getDefaultMiddleware(), logger];

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export default store;

// ===========================================================
// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import contactsReducer from './contacts/contacts-reducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
