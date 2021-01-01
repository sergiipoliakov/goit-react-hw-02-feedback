import React from 'react';

const CounterControls = ({ onLeaveFeedback }) => (
  <div>
    <button type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

export default CounterControls;
