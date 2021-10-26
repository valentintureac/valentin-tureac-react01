export const ProductDetails = ({ product }) => {
  const renderTableRows = () => {
    const entries = Object.entries(product);

    return entries.map(([feature, value]) => {
      return (
        <tr key={feature}>
          <td>{feature}</td>
          <td>{value}</td>
        </tr>
      );
    });
  };

  return (
    <table className="table table-dark">
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default ProductDetails;
