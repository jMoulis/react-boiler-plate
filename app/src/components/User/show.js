/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
 * Local import
 */
import loadingTest from 'src/components/Utils/loadingControl';

/*
 * Code
 */

class Show extends React.Component {
  componentDidMount() {
    const { fetchSampleDataAction, match } = this.props;
    fetchSampleDataAction(match.params.userId);
  }
  render() {
    const { activeSample } = this.props;
    const { sample } = activeSample;

    if (loadingTest(activeSample) !== true) {
      return loadingTest(activeSample);
    }
    return (
      <div id="show-sample">
        <Link to="/users" href="/users">Return</Link>
        <h1 id="show-sample-user">{sample.name}</h1>
        <div className="card mb-4">
          <ul className="list-group list-group-flush" key={sample.id}>
            <li className="list-group-item">Name: {sample.name}</li>
            <li className="list-group-item">Username: {sample.username}</li>
            <li className="list-group-item">Email: {sample.email}</li>
            <li className="list-group-item">Phone: {sample.phone}</li>
            <li className="list-group-item">WebSite: {sample.website}</li>
          </ul>
        </div>
      </div>
    );
  }
}

Show.propTypes = {
  activeSample: PropTypes.object.isRequired,
  fetchSampleDataAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};


/*
 * Export Default
 */
export default Show;
