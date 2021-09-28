import { contacts } from './data.js';

export const findContact = (needle = 'query') => {
  return contacts.filter((contact) => {
    const values = Object.values(contact);
    // values [1, larry, larryson ]

    const haystack = values.reduce((string, value) => {
      if (typeof value === 'string') {
        string += value.toLowerCase();
      }

      return string;
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });
};

export const getContact = (contactId) => {
  contactId = Number(contactId);

  return contacts.find(({ id }) => {
    return id === contactId;
  });
};

export const deleteContact = (contactId) => {
  let contactIndex = -1;
  contactId = Number(contactId);

  for (let i = 0; i < contacts.length; i++) {
    const { id } = contacts[i];

    if (id === contactId) {
      contactIndex = i;
    }
  }

  if (contactIndex >= 0) {
    contacts.splice(contactIndex, 1);
  }
};

export const editContact = (contactId, contactData) => {};
