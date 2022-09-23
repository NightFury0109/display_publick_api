import React, { useEffect } from 'react';

import './App.scss';

import { useAppDispatch } from './redux/hooks';
import { getApis } from './redux/actions/apis';

import SearchAPI from './pages/SearchAPI';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getApis());
  }, []);

  return (
    <div className="App">
      <SearchAPI />
    </div>
  );
}

export default App;
