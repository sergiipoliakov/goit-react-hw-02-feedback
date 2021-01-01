import React from 'react';
import './Section.css';

const Section = ({ title, children }) => (
  <div className="Section">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;
