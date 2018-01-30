/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import App from 'src/components/App';
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
const AppContainer = createContainer(App);
export default withRouter(AppContainer);
