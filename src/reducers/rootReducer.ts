import { combineReducers } from 'redux';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import counterReducer from './counterReducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    counter: counterReducer,
  });
}
