import {combineReducers} from 'redux';
import login from './login';

const reducers = combineReducers({
  login,
});

const rootReducer = (state: any, action: any) => {
  return reducers(state, action);
};
export default rootReducer;
