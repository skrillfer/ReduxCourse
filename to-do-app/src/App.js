import React from 'react';
import Task from './components/Task';
import StoreContext from './contexts/storeContext';
import store from './store/configureStore';

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div>
        <Task store={store} />
      </div>
    </StoreContext.Provider>
  );
};

export default App;
