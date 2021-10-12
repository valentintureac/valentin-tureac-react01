import { Component } from 'react';

class Film extends Component {
  render() {
    const buyButtonTitle = `Buy tickets for ${this.props.film.title}`;

    return (
      <article className="row">
        <div className="col-12 d-flex mb-4 justify-content-between align-items-center">
          <h2>{this.props.film.title}</h2>

          <button
            className="btn btn-outline-light align-self-center"
            title="Back"
            type="button"
            onClick={() => {
              this.props.deselectFilm();
            }}
          >
            Back
          </button>
        </div>

        <div className="col-12 col-md-4 text-center">inser image here</div>

        <div className="col-12 col-md-8 mt-4 mt-md-0">
          <h3 className="mb-4">Details</h3>

          <table className="table table-striped table-dark">
            <tbody>
              <tr>
                <td>Director:</td>
                <td>{this.props.film.director}</td>
              </tr>

              <tr>
                <td>Description:</td>
                <td className="bg-dark text-warning">
                  {this.props.film.opening_crawl}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-12 text-center">
          <button
            className="btn btn-warning text-white"
            type="button"
            title={buyButtonTitle}
            onClick={() => {
              this.props.purchaseFilm();
            }}
          >
            {buyButtonTitle}
          </button>
        </div>
      </article>
    );
  }
}

export default Film;
