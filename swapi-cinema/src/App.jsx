import { Component, Fragment } from 'react';
import Search from './components/Search';

const baseUrl = 'https://swapi.dev/api/filmss';

class App extends Component {
  state = {
    busy: false,
    films: [],
  };

  getFilms() {
    this.setState({
      busy: true,
    });

    // promise chaining
    fetch(baseUrl)
      .then((response) => {
        if (response.status) {
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
        console.log(_);
        this.setState({
          errorMessage: 'An error has occured.',
          busy: false,
        });
      });
  }

  renderFilms() {
    return this.state.films.map((film) => {
      return <p key={film.episode_id}>{film.title}</p>;
    });
  }

  renderMainScreen() {
    if (this.state.busy === true) {
      return <>... loading</>;
    }

    if (this.state.busy === false && this.state.errorMessage) {
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

            <Search></Search>
          </nav>
        </header>
        <main className="container mt-5 pt-5">{this.renderMainScreen()}</main>
      </Fragment>
    );
  }
}

export default App;
