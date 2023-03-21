import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './navigation/Navigation';
import {Provider} from 'react-redux';
import {persistor, Store} from './reduxTKit/Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </React.Fragment>
  );
};

export default App;
