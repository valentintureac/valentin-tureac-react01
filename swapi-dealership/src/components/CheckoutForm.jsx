import { useState } from 'react';

export const CheckoutForm = ({ onSubmit = () => {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    address1: '',
    address2: '',
    planet: '',
    terms: false,
  });

  const { name, surname, email, address1, address2, planet, terms } = formData;

  const onChange = ({ target }) => {
    const { name, value } = target;
    const newState = {
      ...formData,
      [name]: value,
    };

    setFormData(newState);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(formData);
      }}
    >
      <div className="row mb-3">
        <div className="form-group col-6">
          <label htmlFor="name" className="form-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Name *"
            required
            value={name}
            onChange={onChange}
          ></input>
        </div>

        <div className="form-group col-6">
          <label htmlFor="surname" className="form-label">
            Surname *
          </label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Surname *"
            className="form-control"
            required
            value={surname}
            onChange={onChange}
          ></input>
        </div>
      </div>

      <div className="row mb-3">
        <div className="form-group mb-2 col-6">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Email *"
            required
            value={email}
            onChange={onChange}
          ></input>
        </div>

        <div className="form-group mb-2 col-6">
          <label htmlFor="planet" className="form-label">
            Planet *
          </label>
          <input
            type="text"
            id="planet"
            name="planet"
            className="form-control"
            placeholder="Planet *"
            required
            value={planet}
            onChange={onChange}
          ></input>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="address1" className="form-label">
            Address *
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Address line 1 *"
            id="address1"
            name="address1"
            required
            value={address1}
            onChange={onChange}
          ></input>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="address2" className="form-label">
            Address (extra)
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Address line 2"
            id="address2"
            name="address2"
            value={address2}
            onChange={onChange}
          ></input>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="terms"
              id="terms"
              required
              value={terms}
              onChange={onChange}
            ></input>
            <label
              htmlFor="terms"
              className="form-check-label btn p-0 text-white"
            >
              Agree to our terms and conditions
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <button className="btn btn-warning w-50" title="Place Order">
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
