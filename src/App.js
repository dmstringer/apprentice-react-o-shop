import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Route, Switch } from 'react-router';
import PrivateRoute from './components/Shared/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
