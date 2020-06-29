import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import { Homepage } from './components/Homepage/Homepage';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
