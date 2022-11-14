import {Provider} from 'react-redux';
import React from 'react';
import Routes from '~routes';
import {store} from '~state/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
