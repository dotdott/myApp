import React from 'react';
import Routes from './src/routes';
import {configureStore} from './src/store';
import {Provider as StoreProvider} from 'react-redux';

const store = configureStore();

const App = () => {
  return (
    <StoreProvider store={store}>
      <Routes />
    </StoreProvider>
  );
};

export default App;
