import { Component } from 'react';

class Films extends Component {
  renderFilms() {
    if (this.props.films.length <= 0) {
      return <p>No films found</p>;
    }

    return this.props.films.map((film) => {
      const { title, episode_id: id } = film;

      return (
        <article
          key={id}
          className="col-6 col-md-3 p-4 mb-2 d-flex flex-column"
        >
          <header>
            <h6 className="text-warning text-left">{title}</h6>
          </header>
          <section className="d-flex justify-content-between">
            <button
              className="btn btn-sm btn-light"
              type="button"
              title={`View details about ${title}`}
            >
              Details
            </button>
            <button
              className="btn btn-sm btn-warning"
              type="button"
              title={`Buy tickets for ${title}`}
            >
              Buy Tickets
            </button>
          </section>
        </article>
      );
    });
  }

  render() {
    return <section className="row">{this.renderFilms()}</section>;
  }
}

export default Films;
