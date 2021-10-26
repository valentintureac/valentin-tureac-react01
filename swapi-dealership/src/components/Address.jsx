export const Address = ({ address }) => {
  const renderTableRows = () => {
    const entries = Object.entries(address);

    return entries.map(([key, value]) => {
      return (
        <tr key={key}>
          <td>{key}</td>
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

export default Address;
