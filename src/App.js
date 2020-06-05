import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import SearchResult from './components/SearchResult/SearchResult';
import HotelDetails from './components/HotelDetails/HotelDetails';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/searchresult">
          <SearchResult />
        </Route>
        <Route path="/hotel/:id">
          <HotelDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
