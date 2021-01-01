import React, { Component } from 'react';

export default class Statistics extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div>
        <p>Statistics</p>
        <br />
        <span>Good {this.props.good} </span>
        <br />
        <span>Neutral {this.props.neutral} </span>
        <br />

        <span>Bad {this.props.bad}</span>
        <br />
        <br />
        <span>Total {this.props.total}</span>
        <br />
        <br />

        <span>Positive feedback {this.props.positivePercentage}%</span>
      </div>
    );
  }
}
