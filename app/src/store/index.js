/*
 * Npm import
*/
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

/*
 * Local Import
*/
import appReducer from 'src/store/reducer/appReducer';
import appAjax from 'src/store/middleware/appAjax';
/*
 * Code
*/
// Redux DevTools extension
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}
const rootReducer = combineReducers({
  appReducer,
});
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(appAjax),
    ...devTools,
  ),
);

/*
 * Export default
*/
export default store;
