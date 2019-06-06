import React from 'react';
import './styles/App.scss';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';
import authService from './services/AuthService';

function App() {

  const authenticate = authService.isAuthenticated()
  return (
    <div className="App">
      <main> 
      <Switch> 
        <Route exact path='/Dashboard' component={(props)=> <Dashboard {...props} authenticate={authenticate}/>}/>
      </Switch> 
      </main>
    </div>
  );
}

export default App;
