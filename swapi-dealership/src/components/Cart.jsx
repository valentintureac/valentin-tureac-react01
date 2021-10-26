import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import CartTotals from './CartTotals';

export const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(AppContext);

  const navigateToCheckout = () => {
    dispatch({
      type: 'setScreen',
      payload: 'checkout',
    });
  };

  if (cart.length <= 0) {
    dispatch({
      type: 'setScreen',
      payload: 'home',
    });

    return;
  }

  return (
    <section className="row">
      <header className="col-12">
        <h2>Cart</h2>
      </header>

      <div className="col-12 mb-4">
        <CartTotals cart={cart}></CartTotals>
      </div>

      <div className="col-12 text-end">
        <button
          className="btn btn-warning"
          type="button"
          title="Proceed to checkout, please"
          onClick={navigateToCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
