/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import User from 'src/components/User/show';
import { fetchSampleDataAction } from 'src/store/reducer/appReducer';

/*
 * Code
 */
// State
const mapStateToProps = ({ appReducer }) => ({
  activeSample: appReducer.activeSample,
});

// Actions
const mapDispatchToProps = dispatch => ({
  fetchSampleDataAction: (id) => {
    dispatch(fetchSampleDataAction(id));
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const UserContainer = createContainer(User);
export default UserContainer;
