export const CartTotals = ({ cart }) => {
  const renderTableRows = () => {
    return cart.map(({ name, cost_in_credits }) => {
      return (
        <tr key={name}>
          <td>{name}</td>
          <td>{cost_in_credits}</td>
        </tr>
      );
    });
  };

  const renderTotalsRow = () => {
    const total = cart.reduce((total, { cost_in_credits: price }) => {
      // shortcut for: price = cartItem.cost_in_credits
      return (total += Number(price));
    }, 0);

    return (
      <tr>
        <td>Total</td>
        <td className="text-end">{total}</td>
      </tr>
    );
  };

  return (
    <table className="table table-dark">
      <tbody>
        {renderTableRows()}
        {renderTotalsRow()}
      </tbody>
    </table>
  );
};

export default CartTotals;
