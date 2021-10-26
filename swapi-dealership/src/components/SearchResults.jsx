import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ProductTile from './ProductTile';

export const SearchResults = () => {
  const { state, dispatch } = useContext(AppContext);
  const { searchResults } = state;

  const renderResults = () => {
    if (searchResults.length <= 0) {
      return <p>No vehicles found.</p>;
    }

    return searchResults.map((product) => {
      return <ProductTile product={product} key={product.name}></ProductTile>;
    });
  };

  const navigate = () => {
    dispatch({
      type: 'setScreen',
      payload: 'home',
    });

    dispatch({
      type: 'setSearchResults',
      payload: [],
    });
  };

  return (
    <section className="row">
      <header className="col-12 mb-2">
        <h2>Search Results</h2>
      </header>

      {renderResults()}

      <div className="col-12 mt-2 text-end">
        <button
          className="btn btn-outline-warning"
          title="Back"
          type="button"
          onClick={navigate}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default SearchResults;
