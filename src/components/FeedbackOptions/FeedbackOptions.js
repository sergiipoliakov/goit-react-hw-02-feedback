import PropTypes from 'prop-types';

const CounterControls = ({ onLeaveFeedback }) => (
  <div className="CounterControls">
    <button
      className="CounterControls-button"
      type="button"
      name="good"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      className="CounterControls-button"
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      className="CounterControls-button"
      type="button"
      name="bad"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);

export default CounterControls;

CounterControls.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
