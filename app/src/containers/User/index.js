/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import User from 'src/components/User';
import { fetchSampleDatasAction } from 'src/store/reducer/appReducer';

/*
 * Code
 */
// State
const mapStateToProps = ({ appReducer }) => ({
  sampleList: appReducer.sampleList,
});

// Actions
const mapDispatchToProps = dispatch => ({
  fetchSampleDatasAction: () => {
    dispatch(fetchSampleDatasAction());
  },
});


/*
 * Export default
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const UserContainer = createContainer(User);
export default UserContainer;
