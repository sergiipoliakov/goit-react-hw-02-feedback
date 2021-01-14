import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className="Section">
    <h2 className="Section-title">{title}</h2>
    {children}
  </div>
);

export default Section;

Section.defaultProps = {
  title: 'Please leave the feedback',
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
