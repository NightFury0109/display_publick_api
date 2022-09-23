import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import './App.scss';

import store from './redux/store';
import { getApis } from './redux/actions/apis';

import SearchAPI from './pages/SearchAPI';

const App: React.FC = () => {
  useEffect(() => {
    getApis();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <SearchAPI />
      </div>
    </Provider>
  );
}

export default App;
