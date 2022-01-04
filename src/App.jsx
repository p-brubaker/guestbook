import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/views/home/Home';
import Auth from './views/auth/Auth';
import PrivateRoute from './components/private-route/PrivateRoute';

export default function App() {
  return (
    // <UserProvider>
    //   <Home />
    // </UserProvider>
    <Router>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        </Route>
      </Switch>
    </Router>
  );
}
