/*
 * Npm Import
 */
/*
 * Local Import
 */

/*
 * Types
 */
export const FETCH_SAMPLE_DATAS = 'FETCH_SAMPLE_DATAS';
export const FETCH_SAMPLE_DATAS_SUCCESS = 'FETCH_SAMPLE_DATAS_SUCCESS';
export const FETCH_SAMPLE_DATAS_FAILURE = 'FETCH_SAMPLE_DATAS_FAILURE';

export const FETCH_SAMPLE_DATA = 'FETCH_SAMPLE_DATA';
export const FETCH_SAMPLE_DATA_SUCCESS = 'FETCH_SAMPLE_DATA_SUCCESS';
export const FETCH_SAMPLE_DATA_FAILURE = 'FETCH_SAMPLE_DATA_FAILURE';

/*
 * State
*/
const initialState = {
  sampleList: {
    samples: [],
    loading: false,
    error: null,
  },
  activeSample: {
    sample: {},
    loading: false,
    error: null,
  },
};

/*
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SAMPLE_DATAS: {
      return {
        ...state,
        sampleList: {
          samples: [],
          loading: true,
          error: null,
        },
      };
    }
    case FETCH_SAMPLE_DATAS_SUCCESS: {
      return {
        ...state,
        sampleList: {
          samples: action.payload,
          loading: false,
          error: null,
        },
      };
    }
    case FETCH_SAMPLE_DATAS_FAILURE: {
      return {
        ...state,
        sampleList: {
          samples: [],
          loading: false,
          error: action.payload,
        },
      };
    }
    case FETCH_SAMPLE_DATA: {
      return {
        ...state,
        activeSample: {
          sample: {},
          loading: true,
          error: null,
        },
      };
    }
    case FETCH_SAMPLE_DATA_SUCCESS: {
      return {
        ...state,
        activeSample: {
          sample: action.payload,
          loading: false,
          error: null,
        },
      };
    }
    case FETCH_SAMPLE_DATA_FAILURE: {
      return {
        ...state,
        activeSample: {
          sample: {},
          loading: false,
          error: action.payload,
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

/*
 *Action creators
 */
export const fetchSampleDatasAction = () => ({
  type: FETCH_SAMPLE_DATAS,
});
export const fetchSampleDatasSuccessAction = data => ({
  type: FETCH_SAMPLE_DATAS_SUCCESS,
  payload: data,
});
export const fetchSampleDatasFailureAction = error => ({
  type: FETCH_SAMPLE_DATAS_FAILURE,
  payload: error,
});

export const fetchSampleDataAction = id => ({
  type: FETCH_SAMPLE_DATA,
  payload: id,
});
export const fetchSampleDataSuccessAction = data => ({
  type: FETCH_SAMPLE_DATA_SUCCESS,
  payload: data,
});
export const fetchSampleDataFailureAction = error => ({
  type: FETCH_SAMPLE_DATA_FAILURE,
  payload: error,
});
/*
 * Export default
*/
export default reducer;
