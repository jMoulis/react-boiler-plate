// Npm import
import React from 'react';

// Local import
import Spinner from 'src/components/Utils/loader';
import Error from 'src/components/Utils/error';

export default ({ loading, error }) => {
  if (loading) {
    return <Spinner />;
  }
  else if (error) {
    return <Error error={error} />;
  }
  return true;
};
