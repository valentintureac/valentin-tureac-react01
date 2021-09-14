class NewsletterForm extends React.Component {
  // v1, no constructor
  state = {
    email: '',
    inputMessage: '',
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
    console.log('submitted ' + this.state.email);

    setTimeout(() => {
      alert(`Hello, ${email}! Thank you for  subscribing!`);
    }, 3000);
  };

  onInputChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-newsletter container">
        <label htmlFor="field-newsletter">
          Subscribe to our <span>newsletter</span>
        </label>

        <div>
          <input
            type="text"
            name="field-newsletter"
            id="field-newsletter"
            value={this.state.email}
            onChange={this.onInputChange}
            placeholder="enter your email address to receive the latest news!"
          ></input>

          {this.state.inputMessage.length > 0 ? (
            <div className="message">{this.state.inputMessage}</div>
          ) : null}
        </div>

        <button type="submit" title="Subscribe">
          Subscribe
        </button>
      </form>
    );
  }
}

const newsletterContainer = document.querySelector('.home-newsletter');
ReactDOM.render(<NewsletterForm></NewsletterForm>, newsletterContainer);
