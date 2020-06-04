import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
