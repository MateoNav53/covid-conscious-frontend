import React from 'react';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import AddLog from './components/addLog';
import LogList from './components/LogList';
import CovidFaq from './components/CovidFAQ';
import PublicRestricted from './route-permissions/PublicRestricted';
import MemberRestricted from './route-permissions/MemberRestricted';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <MemberRestricted path="/register" component={Register} />
          <MemberRestricted path="/login" component={Login} />
          <PublicRestricted path="/loglist" component={LogList} />
          <PublicRestricted path="/addlog" component={AddLog} />
          <Route path="/covidfaq" component={CovidFaq} />
        </Switch>
        <div className="App">
          
        </div>
    </HashRouter>
  );
}

export default App;
