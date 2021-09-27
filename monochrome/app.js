const ADD_TO_CART_EVENT = 'cart:add';
const REMOVE_FROM_CART_EVENT = 'cart:remove';
const ADD_TO_WISHLIST_EVENT = 'wl:add';
const REMOVE_FROM_WISHLIST_EVENT = 'wl:remove';

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
            Hello, {this.state.submittedValue}!<br /> Thank you for subscribing!
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
      dispatchEvent(
        new CustomEvent(
          this.state.added ? REMOVE_FROM_CART_EVENT : ADD_TO_CART_EVENT,
          {
            detail: {
              productId: this.props.productId,
            },
          },
        ),
      );

      this.setState({
        busy: false,
        added: !this.state.added,
      });
    }, 500);
  };

  render() {
    return (
      <a
        href=""
        onClick={this.onClick}
        title={this.state.added === true ? 'Remove from Cart' : 'Add to Cart'}
        className={`${this.state.added === true ? 'active' : ''} ${
          this.state.busy === true ? 'busy' : ''
        }`}
      >
        {this.state.added === true ? (
          <i className="fas fa-plus-square"></i>
        ) : (
          <i className="far fa-plus-square"></i>
        )}
        <i className="fas fa-spinner icon"></i>
      </a>
    );
  }
}

class AddtoWishlistButton extends React.Component {
  state = {
    added: false,
    busy: false,
  };

  onClick = (event) => {
    event.preventDefault();

    this.setState({
      busy: true,
    });

    setTimeout(() => {
      dispatchEvent(
        new CustomEvent(
          this.state.added ? REMOVE_FROM_WISHLIST_EVENT : ADD_TO_WISHLIST_EVENT,
          {
            detail: {
              productId: this.props.productId,
            },
          },
        ),
      );

      this.setState({
        busy: false,
        added: !this.state.added,
      });
    }, 500);
  };

  render() {
    return (
      <a
        href=""
        onClick={this.onClick}
        title={
          this.state.added === true ? 'Remove from Wishlist' : 'Add to Wishlist'
        }
        className={`${this.state.added === true ? 'active' : ''} ${
          this.state.busy === true ? 'busy' : ''
        }`}
      >
        {this.state.added === true ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
        <i className="fas fa-spinner icon"></i>
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

class HeaderCounters extends React.Component {
  state = {
    cartItemsCount: 0,
    wishlistItemsCount: 0,
    cartItems: [],
    wishlistItems: [],
    showWishlistButton: true,
  };

  showProducts(collectionName, displayName) {
    let message = '';
    const bucket = displayName.toLowerCase();

    if (this.state[collectionName] < 1) {
      message = `There are no products in your ${bucket}.`;
    } else {
      message = `These are the PIDS in your ${bucket}: ${
        this.state[`${bucket}Items`]
      }`;
    }

    alert(message);
  }

  productCartAction = (event) => {
    const { productId } = event.detail;
    const { type: eventType } = event;
    let { cartItemsCount, cartItems } = this.state;

    switch (eventType) {
      case ADD_TO_CART_EVENT:
        cartItemsCount++;
        cartItems.push(productId);
        break;
      case REMOVE_FROM_CART_EVENT:
        cartItemsCount--;

        cartItems = cartItems.filter((item) => {
          return item !== productId;
        });
        break;
    }

    this.setState({
      cartItemsCount,
      cartItems,
    });
  };

  productWishlistAction = (event) => {
    const { productId } = event.detail;
    const eventType = event.type;
    const { wishlistItems } = this.state;
    let newProductIds = [];
    let productCount = 0;

    switch (eventType) {
      case ADD_TO_WISHLIST_EVENT:
        newProductIds =
          wishlistItems.length === 0
            ? [productId]
            : [...wishlistItems, productId];
        break;
      case REMOVE_FROM_WISHLIST_EVENT:
        for (let i = 0; i < wishlistItems.length; i++) {
          if (wishlistItems[i] === productId) {
            continue;
          }

          newProductIds.push(wishlistItems[i]);
        }

        break;
    }

    productCount = newProductIds.length;

    this.setState({
      wishlistItemsCount: productCount,
      wishlistItems: newProductIds,
    });
  };

  componentDidMount() {
    addEventListener(ADD_TO_CART_EVENT, this.productCartAction);
    addEventListener(REMOVE_FROM_CART_EVENT, this.productCartAction);

    addEventListener(ADD_TO_WISHLIST_EVENT, this.productWishlistAction);
    addEventListener(REMOVE_FROM_WISHLIST_EVENT, this.productWishlistAction);
  }

  render() {
    const { wishlistItemsCount, cartItemsCount } = this.state;

    return (
      <React.Fragment>
        <ul>
          <li>
            <a href="http://" title="My Account">
              <i className="fas fa-user"></i>
            </a>
          </li>

          <li>
            <a href="#" title="Saved Items">
              {wishlistItemsCount}
              <i
                className="far fa-heart icon"
                onClick={() => {
                  this.showProducts('wishlistItemsCount', 'Wishlist');
                }}
              ></i>
            </a>
          </li>

          <li>
            <a href="#" title="Cart">
              {cartItemsCount}
              <i
                className="fas fa-shopping-bag icon"
                onClick={() => {
                  this.showProducts('cartItemsCount', 'Cart');
                }}
              ></i>
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

const headerCounters = document.querySelector('.header-controls');
ReactDOM.render(<HeaderCounters></HeaderCounters>, headerCounters);
