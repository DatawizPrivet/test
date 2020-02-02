import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

import Header from './components/Header';

const App = () => {
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if(!isAuth) {
      
    }
  } ,[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
