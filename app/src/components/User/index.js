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

class User extends React.Component {
  componentDidMount() {
    const { fetchSampleDatasAction } = this.props;
    fetchSampleDatasAction();
  }
  render() {
    const { sampleList } = this.props;
    const { samples } = sampleList;

    if (loadingTest(sampleList) !== true) {
      return loadingTest(sampleList);
    }
    return (
      <div>
        {samples.length > 0 ?
          <div>
            {samples.map(sample => (
              <div key={sample.id} className="card mb-4">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Name: {sample.name}</li>
                  <li className="list-group-item">Username: {sample.username}</li>
                  <li className="list-group-item">Email: {sample.email}</li>
                  <li className="list-group-item">Phone: {sample.phone}</li>
                  <li className="list-group-item">WebSite: {sample.website}</li>
                  <li className="list-group-item">
                    <Link to={`/users/${sample.id}`} href={`/users/${sample.id}`} title="Show detal sample">Detail</Link>
                  </li>
                </ul>
              </div>))}
          </div>
           : <span>No data found</span>}
      </div>
    );
  }
}

User.propTypes = {
  sampleList: PropTypes.object.isRequired,
  fetchSampleDatasAction: PropTypes.func.isRequired,
};


/*
 * Export Default
 */
export default User;
