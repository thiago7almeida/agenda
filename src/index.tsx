import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import Router from './routes';
import {persistor, store} from './store';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const App: React.FC<{}> = ({}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <IconRegistry icons={EvaIconsPack} />
          <Router />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
