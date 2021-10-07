import { Component, Fragment } from 'react';
import Films from './components/Films';
import Search from './components/Search';

const baseUrl = 'https://swapi.dev/api/films';

class App extends Component {
  state = {
    busy: false,
    films: [],
    errorMessage: '',
  };

  getFilms() {
    this.setState({
      busy: true,
    });

    // promise chaining
    fetch(baseUrl)
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

  renderFilms() {
    // return this.state.films.map((film) => {
    //   return <p key={film.episode_id}>{film.title}</p>;
    // });

    return (
      <>
        <h2>Available Films</h2>
        <Films films={this.state.films}></Films>
      </>
    );
  }

  renderMainScreen() {
    if (this.state.busy === true) {
      return <>... loading</>;
    }

    if (this.state.busy === false && this.state.errorMessage.length > 0) {
      return <>{this.state.errorMessage}</>;
    }

    return this.renderFilms();
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <Fragment>
        <header className="navbar-expand-md navbar-dark fixed-top bg-dark py-2">
          <nav className="container d-flex justify-content-between align-items-center">
            <h1 className="display-6 text-warning">Swapi Cinema</h1>

            <Search
              onSearchResults={(films) => {
                this.setState({
                  films,
                });
              }}
            ></Search>
          </nav>
        </header>
        <main className="container mt-5 pt-5">{this.renderMainScreen()}</main>
      </Fragment>
    );
  }
}

export default App;
