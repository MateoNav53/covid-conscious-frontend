import React from 'react';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar/>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <div className="App">
          <h1>Covid Conscious</h1>
        </div>
    </HashRouter>
  );
}

export default App;
