import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'], // то, что не нужно сохранять в локал сторейдже
};

export default contactsPersistConfig;
