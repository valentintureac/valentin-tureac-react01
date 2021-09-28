import { findContact } from './query.js';
import { render as renderMessage } from './message.js';
import { render as renderContact } from './contact.js';
import { addMessage, clearMessages } from './notification-bar.js';

import stage, { clearStage } from './stage.js';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  let searchString = formData.get('q');

  searchString = searchString.trim();

  if (searchString.length < 1) {
    return;
  }

  form.querySelector('input[name="q"]').value = '';

  clearMessages();

  const contacts = findContact(searchString);
  const fragment = new DocumentFragment();
  const contactsCount = contacts.length;

  contacts.forEach((contact) => {
    fragment.append(renderContact(contact));
  });

  if (contactsCount < 1) {
    const contactNotificationElement = renderMessage(
      'No contacts found',
      'warning',
    );
    addMessage(contactNotificationElement);
  } else {
    addMessage(
      renderMessage(
        `Found ${contactsCount} ${contactsCount > 1 ? 'contacts' : 'contact'}.`,
        'success',
      ),
    );
  }

  clearStage();
  stage.append(fragment);
});

export default searchForm;
