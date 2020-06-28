import {createStore, compose} from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {ContactsState} from './ducks/contacts';
import {SearchState} from './ducks/search';
export interface ApplicationState {
  contacts: ContactsState;
  search: SearchState;
}

const persistConfig = {
  key: '1m2_agenda',
  stateReconciler: autoMergeLevel2,
  storage: AsyncStorage,
  whitelist: [],
};

import rootReducer from './ducks';

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};

export const {store, persistor} = configureStore();
