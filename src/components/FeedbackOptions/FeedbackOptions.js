import PropTypes from 'prop-types';

const CounterControls = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;

  return (
    <div className="CounterControls">
      <button
        className="CounterControls-button"
        type="button"
        name={good}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className="CounterControls-button"
        type="button"
        name={neutral}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className="CounterControls-button"
        type="button"
        name={bad}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default CounterControls;

CounterControls.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
