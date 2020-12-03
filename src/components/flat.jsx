import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const imageUrl = { backgroundImage: `url(${this.props.imageUrl})` };
    return (
      <div className={`card ${this.state.clicked ? "active" : ""}`} style={imageUrl} onClick={this.handleClick}>
        <div className="card-category">
          { this.props.price } { this.props.priceCurrency }
        </div>
        <div className="card-description">
          <h2>{ this.props.name }</h2>
        </div>
      </div>
    );
  }
};

export default Flat;
