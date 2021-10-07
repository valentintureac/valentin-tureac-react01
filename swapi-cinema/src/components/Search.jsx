import { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className="d-flex">
        <input
          className="form-control me-2 align-self-center"
          type="text"
          name="q"
          placeholder="Search film..."
          required
        />
        <button
          className="btn btn-outline-warning"
          type="submit"
          title="Search"
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
