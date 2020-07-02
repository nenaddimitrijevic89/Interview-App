import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import { Homepage } from './components/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import { CandidateInfo } from './components/Info/CandidateInfo/CandidateInfo';
import { LoginForm } from './components/Admin/LoginForm/LoginForm';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/info/:id" component={CandidateInfo} />
        <Route exact path="/admin" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
