import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div className="Notification">
      <p> {message}</p>
    </div>
  );
};

export default Notification;

Notification.defaultProps = {
  message: 'No feedback given',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
