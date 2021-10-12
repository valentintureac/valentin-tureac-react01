import { Component, Fragment } from 'react';
import Film from './components/Film';
import Films from './components/Films';
import PurchaseFilm from './components/PurchaseFilm';
import Search from './components/Search';

const baseUrl = 'https://swapi.dev/api/films';

class App extends Component {
  state = {
    busy: true,
    films: [],
    errorMessage: '',
    hasSearchResults: false,
    selectedFilm: null,
    purchasing: false,
  };

  getFilms() {
    this.setState({
      busy: true,
    });

    // promise chaining
    return fetch(baseUrl)
      .then((response) => {
        if (response.status === 404) {
          throw new Error('404');
        }

        return response.json();
      })
      .then(({ results }) => {
        this.setState({
          films: results,
          busy: false,
        });
      })
      .catch((_) => {
        this.setState({
          errorMessage: 'An error has occured.',
          busy: false,
        });
      });
  }

  clearSearchResults() {
    this.getFilms().then(() => {
      this.setState({
        hasSearchResults: false,
      });
    });
  }

  renderFilms() {
    return (
      <>
        <h2>Available films</h2>

        <Films
          films={this.state.films}
          selectFilm={(film) => {
            this.setState({
              selectedFilm: film,
            });
          }}
          purchaseFilm={(film) => {
            this.setState({
              selectedFilm: film,
              purchasing: true,
            });
          }}
        ></Films>
        {this.state.hasSearchResults ? (
          <button
            className="btn btn-warning text-white"
            title="See all movies"
            type="button"
            onClick={() => {
              this.clearSearchResults();
            }}
          >
            See all movies
          </button>
        ) : (
          <></>
        )}
      </>
    );
  }

  renderFilm() {
    return (
      <Film
        film={this.state.selectedFilm}
        deselectFilm={() => {
          this.setState({
            selectedFilm: null,
          });
        }}
        purchaseFilm={() => {
          this.setState({
            purchasing: true,
          });
        }}
      ></Film>
    );
  }

  renderMainScreen() {
    if (this.state.busy === true) {
      return <>... loading</>;
    }

    if (this.state.busy === false && this.state.errorMessage.length > 0) {
      return <>{this.state.errorMessage}</>;
    }

    if (this.state.purchasing === true) {
      return (
        <PurchaseFilm
          film={this.state.selectedFilm}
          cancelPurchase={() => {
            this.setState({
              purchasing: false,
              selectedFilm: null,
            });
          }}
        ></PurchaseFilm>
      );
    }

    return this.state.selectedFilm !== null
      ? this.renderFilm()
      : this.renderFilms();
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <Fragment>
        <header className="navbar-expand-md navbar-dark fixed-top bg-dark">
          <nav className="container d-flex justify-content-between">
            <h1 className="display-6 text-warning">Swapi Cinema</h1>
            <Search
              onSearchResults={(films) => {
                this.setState({
                  films,
                  hasSearchResults: true,
                  selectedFilm: null,
                });
              }}
              placeholder="Choose a SW movie"
            ></Search>
          </nav>
        </header>

        <main className="container mt-5 pt-5">{this.renderMainScreen()}</main>
      </Fragment>
    );
  }
}

export default App;
