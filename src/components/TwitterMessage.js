import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      yourMessage: "",
      charsRemaining: props.maxChars,
    };
  }

  handleChangeYourMessage = (e) => {
    if (e.target.value.length <= this.props.maxChars) {
      this.setState({
        yourMessage: e.target.value,
        charsRemaining: this.props.maxChars - e.target.value.length,
      });
    }
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.yourMessage}
          onChange={this.handleChangeYourMessage}
        />
        <p>Characters Remaining: {this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
