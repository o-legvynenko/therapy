
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';

export default createStore(
  reducer,
  {},
  applyMiddleware(reduxThunk)
);