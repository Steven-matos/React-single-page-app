import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// App Components
import Home from './Home.js'

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Route path="/" component={Home} />
    </div>
  </BrowserRouter>
);

export default App;
