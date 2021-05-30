import React from 'react';
import Routes from './src/routes';
import {configureStore} from './src/store';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const store = configureStore();

const App = () => {
  return (
    <StoreProvider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Routes />
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
