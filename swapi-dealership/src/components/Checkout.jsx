import { useContext } from 'react';
import CheckoutForm from './CheckoutForm';
import CartTotals from './CartTotals';
import { AppContext } from './../contexts/AppContext';

export const Checkout = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  const placeOrder = (formData) => {
    console.log('sent to ', formData);
  };

  return (
    <section className="row">
      <header className="col-12 mb-4">
        <h2>Checkout</h2>
      </header>

      <section className="col-12 col-md-8">
        <CheckoutForm
          onSubmit={(formData) => {
            placeOrder(formData);
          }}
        ></CheckoutForm>
      </section>

      <footer className="col-12 col-md-4">
        <CartTotals cart={cart}></CartTotals>
      </footer>
    </section>
  );
};

export default Checkout;
