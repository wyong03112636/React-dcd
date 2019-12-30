import React from 'react';
import LayOut from './pages/LayOut.jsx'
import store from './store/index.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return ( 
  <Provider store={store}>
   <Router>
    <LayOut></LayOut>
    </Router>
  </Provider>
  );
}

export default App;