import {Reducer} from 'redux';

export const Types = {
  SET_NAME: 'search/SET_NAME',
  CLEAR_NAME: 'search/CLEAR_NAME',
};

export interface SearchState {
  name: string;
}

//mock data
const initialState: SearchState = {
  name: '',
};

const reducer: Reducer<SearchState> = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_NAME:
      return {...state, name: action.payload};
    case Types.CLEAR_NAME:
      return initialState;

    default:
      return state;
  }
};
export default reducer;

export const setName = (name: string) => ({
  type: Types.SET_NAME,
  payload: name,
});
export const clearName = () => ({
  type: Types.SET_NAME,
});
