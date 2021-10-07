export const render = () => {
  const addContactContainer = document.createElement('form');

  addContactContainer.classList.add('add-contact');

  addContactContainer.innerHTML = `
    <h4 class="mb-2">Add new contact!</h4>

    <label class="form-label mb-2" for="name">Name</label>
    <input class="form-control form-control-sm mb-4" type="text" id="name" name="name" placeholder="Name"/>

    <label class="form-label mb-2" for="surname">Surname</label>
    <input class="form-control form-control-sm mb-4" type="text" id="surname" name="surname" placeholder="Surname"/>

    <label class="form-label mb-2" for="email">Email</label>
    <input class="form-control form-control-sm mb-4" type="email" id="email" name="email" placeholder="Email"/>

    <label class="form-label mb-2" for="phone">Phone</label>
    <input class="form-control form-control-sm mb-4" type="tel" id="phone" name="phone" placeholder="Phone"/>

    <input type="hidden" name="id">

    <div class="mt-4">
      <button class="btn btn-primary me-3" type="submit">Save</button>
      <button class="btn btn-secondary me-3 cancel-add-contact" type="button">Cancel</button>
    </div>
  `;

  return addContactContainer;
};
