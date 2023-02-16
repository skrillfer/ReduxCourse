import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './tasks';

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const store = createStore(
  reducer,
  compose(
    middlewareEnhancer,
    devToolsEnhancer({ trace: true })
    // other store enhancers if any
  )
);

export default store;
