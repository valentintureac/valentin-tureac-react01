const buttonGroup = [
  {
    name: 'delete',
    displayName: 'Delete',
    buttonClass: 'btn-danger',
  },
  {
    name: 'edit',
    displayName: 'Edit',
    buttonClass: 'btn-primary',
  },
];

export const render = (contact) => {
  const contactContainer = document.createElement('article');
  contactContainer.classList.add('contact', 'border', 'p-3', 'mb-3');

  const heading = document.createElement('h1');
  heading.innerText = `${contact.name} ${contact.surname}`;

  const information = document.createElement('ul');
  const phone = document.createElement('li');
  const email = document.createElement('li');
  phone.textContent = contact.phone;
  email.textContent = contact.email;
  information.append(phone);
  information.append(email);

  const fragment = new DocumentFragment();

  buttonGroup.forEach(({ name, displayName, buttonClass }) => {
    const button = document.createElement('button');
    button.classList.add('btn', 'me-3', buttonClass, `${name}-contact`);
    button.type = 'button';
    button.title = displayName;
    button.innerText = displayName;
    button.dataset.contactId = contact.id;

    fragment.append(button);
  });

  // const deleteButton = document.createElement('button');
  // deleteButton.classList.add('btn','btn-secondary');
  // const editButton = document.createElement('button');

  contactContainer.append(heading);
  contactContainer.append(information);
  contactContainer.append(fragment);

  return contactContainer;
};
