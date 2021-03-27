export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getContactsToShow = state => {
  const items = getContacts(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
