import React from 'react';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import AddLog from './components/addLog';
import LogList from './components/LogList';
import CovidFaq from './components/CovidFAQ';
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
          <Route path="/loglist" component={LogList} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/covidfaq" component={CovidFaq} />
        </Switch>
        <div className="App">
          
        </div>
    </HashRouter>
  );
}

export default App;
