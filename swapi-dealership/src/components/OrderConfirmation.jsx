import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Address from './Address';
import CartTotals from './CartTotals';

export const OrderConfirmation = () => {
  const { state } = useContext(AppContext);
  const {
    order: { address, items },
  } = state;

  return (
    <section className="row">
      <header className="col-12 mb-4">
        <h2>Thank you</h2>
      </header>
      <section className="col-12 col-md-6">
        <h3>Products:</h3>
        {/* attention at the delete button */}
        <CartTotals cart={items} controls={false}></CartTotals>
      </section>
      <section className="col-12 col-md-6">
        <h3>Address:</h3>

        <Address address={address}></Address>
      </section>
    </section>
  );
};

export default OrderConfirmation;
