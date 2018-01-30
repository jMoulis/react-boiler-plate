// Npm Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import

const Error = ({ error }) => (
  <div className="alert alert-danger" role="alert">
    {`Oups an error occured: ${error}`}
  </div>
);

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
