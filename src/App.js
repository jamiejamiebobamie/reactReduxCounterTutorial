import React from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import CounterList from './CounterList'
import Total from './Total'
import Max from './Max'
import CreateCounter from './CreateCounter'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateCounter/>
        <CounterList />
        <div>
            <Total />
            <Max />
         </div>
    </div>
    </Provider>
  );
}

export default App;
