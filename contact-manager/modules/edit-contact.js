export const render = (contact) => {
  const editContactContainer = document.createElement('form');

  editContactContainer.classList.add('edit-contact');

  const { name, surname, email, phone, id } = contact;

  editContactContainer.innerHTML = `
    <h4 class="mb-2">Editing contact ${name} ${surname} (id: ${id}).</h4>

    <label class="form-label mb-2" for="name">Name</label>
    <input class="form-control form-control-sm mb-4" type="text" id="name" name="name" value="${name}"/>

    <label class="form-label mb-2" for="surname">Surname</label>
    <input class="form-control form-control-sm mb-4" type="text" id="surname" name="surname" value="${surname}"/>

    <label class="form-label mb-2" for="email">Surname</label>
    <input class="form-control form-control-sm mb-4" type="email" id="email" name="email" value="${email}"/>

    <label class="form-label mb-2" for="phone">Phone</label>
    <input class="form-control form-control-sm mb-4" type="tel" id="phone" name="phone" value="${phone}"/>

    <input type="hidden" name="id" value="${id}">

    <div class="mt-4">
      <button class="btn btn-primary me-3" type="submit">Save</button>
      <button class="btn btn-secondary me-3 cancel-edit-contact" type="button">Cancel</button>
    </div>
  `;

  return editContactContainer;
};
