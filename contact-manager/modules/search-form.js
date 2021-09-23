import { contacts } from './data.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const searchString = formData.get('q');

  if (searchString.trim().length < 1) {
    return;
  }

  // refactor:
  const tempContacts = contacts.filter((contact) => {
    const values = Object.values(contact);
    const haystack = values.reduce((string, value) => {
      if (typeof value === 'string') {
        string += value.toLowerCase();
      }

      return string;
    }, '');

    if (haystack.includes(searchString)) {
      return true;
    }

    return false;
  });

  console.log(tempContacts);
});

export default searchForm;
