/*
 * Npm import
 */
import axios from 'axios';

/*
 * Local import
 */
import ROOT_URL from 'config/config';
import {
  FETCH_SAMPLE_DATA,
  fetchSampleDataSuccessAction,
  fetchSampleDataFailureAction,
  FETCH_SAMPLE_DATAS,
  fetchSampleDatasSuccessAction,
  fetchSampleDatasFailureAction,
} from 'src/store/reducer/appReducer';

/*
 * Code
 */

/*
 * Middleware
 */
export default store => next => (action) => {
  switch (action.type) {
    case FETCH_SAMPLE_DATA: {
      const url = `${ROOT_URL}users/${action.payload}`;
      axios({
        method: 'get',
        url,
      })
        .then(({ data }) => {
          store.dispatch(fetchSampleDataSuccessAction(data));
        })
        .catch(({ response }) => {
          store.dispatch(fetchSampleDataFailureAction(response.status));
        });
    }
      break;
    case FETCH_SAMPLE_DATAS: {
      const url = `${ROOT_URL}users`;
      axios({
        method: 'get',
        url,
      })
        .then(({ data }) => {
          store.dispatch(fetchSampleDatasSuccessAction(data));
        })
        .catch(({ response }) => {
          store.dispatch(fetchSampleDatasFailureAction(response.status));
        });
    }
      break;
    default:
  }

  // Je passe à mon voisin
  next(action);
};
