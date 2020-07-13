import React from 'react';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import AddLog from './components/addLog'
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/addlog" component={AddLog} />
        </Switch>
        <div className="App">
          
        </div>
    </HashRouter>
  );
}

export default App;
