import PropTypes from 'prop-types';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div className="Statistics">
      <h2>Statistics</h2>

      <span className="Statistics-item">Good {good} </span>

      <span className="Statistics-item">Neutral {neutral} </span>

      <span className="Statistics-item">Bad {bad}</span>

      <span className="Statistics-item">Total {total}</span>

      <span className="Statistics-item">
        Positive feedback {positivePercentage}%
      </span>
    </div>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
