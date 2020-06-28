import {combineReducers, Action} from 'redux';
import contacts from './contacts';
import search from './search';

const reducers = combineReducers({
  contacts,
  search,
});

const rootReducer = (state: any, action: Action) => {
  return reducers(state, action);
};
export default rootReducer;
