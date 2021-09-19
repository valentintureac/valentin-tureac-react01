class NewsletterForm extends React.Component {
  state = {
    email: '',
    inputMessage: '',
    submitted: false,
    busy: false,
    submitted: false,
    submittedValue: '',
  };

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;

    if (!this.validateEmail(email)) {
      this.setState({
        inputMessage: 'Please use a valid email',
      });
      return;
    }

    this.setState({
      busy: true,
    });

    console.log('submitted ' + this.state.email);

    setTimeout(() => {
      this.setState({
        busy: false,
        email: '',
        submitted: true,
        submittedValue: this.state.email,
      });
    }, 1000);
  };

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.submitted === true ? (
          <div className="container text-center">
            Hello, {this.state.submittedValue}!<br></br> Thank you for
            subscribing!
          </div>
        ) : (
          <form onSubmit={this.onSubmit}>
            <label htmlFor="email-newsletter">Sign up for our newsletter</label>
            <input
              type="text"
              name="email"
              id="email-newsletter"
              value={this.state.email}
              onChange={this.onInputChange}
              placeholder="enter your email address to recieve updates"
            ></input>
            {this.state.inputMessage.length > 0 ? (
              <div className="error-message">{this.state.inputMessage}</div>
            ) : null}
            <button
              type="submit"
              title="submit"
              disabled={this.state.busy}
              className={`${this.state.busy === true ? 'busy' : ''}`}
            >
              {this.state.busy ? (
                <i className="fas fa-spinner icon"></i>
              ) : (
                'Submit'
              )}
            </button>
          </form>
        )}
      </div>
    );
  }
}

const newsletterContainer = document.querySelector(
  '.footer-sign-up-newsletter',
);

ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);

class AddToCartButton extends React.Component {
  state = {
    added: false,
    busy: false,
  };

  onClick = (event) => {
    event.preventDefault();
    if (this.state.busy === true) {
      return;
    }

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        added: !this.state.added,
      });
    }, 250);
  };

  render() {
    return (
      <a
        href=""
        onClick={this.onClick}
        title={this.state.added === true ? 'Remove from Cart' : 'Add to Cart'}
      >
        {this.state.added === true ? (
          <i className="fas fa-plus-square"></i>
        ) : (
          <i className="far fa-plus-square"></i>
        )}
      </a>
    );
  }
}

class AddtoWishlistButton extends React.Component {
  state = {
    added: false,
    busy: true,
  };

  onClick = (event) => {
    event.preventDefault();

    this.setState({
      busy: false,
    });

    setTimeout(() => {
      this.setState({
        busy: false,
        added: !this.state.added,
      });
    }, 250);
  };

  render() {
    return (
      <a
        href=""
        onClick={this.onClick}
        title={
          this.state.added === true ? 'Remove from Wishlist' : 'Add to Wishlist'
        }
      >
        {this.state.added === true ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </a>
    );
  }
}

class ProductControls extends React.Component {
  render() {
    const productId = this.props.productId;

    return [
      <AddToCartButton key="1" productId={productId}></AddToCartButton>,
      <AddtoWishlistButton key="2" productId={productId}></AddtoWishlistButton>,
    ];
  }
}

const productTileControls = document.querySelectorAll('.product-tile-controls');

productTileControls.forEach((productTileControl, index) => {
  ReactDOM.render(
    <ProductControls key={index} productId={index}></ProductControls>,
    productTileControl,
  );
});
