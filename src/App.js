import React, { Component } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = e => {
    const field = e.target.name;

    this.setState(prevState => {
      return {
        [field]: this.state[field] + 1,
      };
    });
  };
  countTotalFeedback() {
    let total;
    const values = Object.values(this.state);

    total = values.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
    return total;
  }

  countPositiveFeedbackPercentage() {
    const positivFeedback = this.state.good;
    let total;
    const values = Object.values(this.state);

    total = values.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });

    const percentage = (positivFeedback / total) * 100;
    // 0 делим на 0 = NaN
    if (percentage) {
      return Math.round(percentage);
    }
    return 0;
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave the feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleChange}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}
