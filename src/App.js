import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

import { Link, Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>

        <Link to="/">
          <img className="App-logo" src="Giffy logo" alt="/logo.png" />
        </Link>

        <Route component={Home} path="/" />

        <Route component={SearchResults} path="/search/:keyword" />

        <Route component={Detail} path="/gif:id" />
      </section>
    </div>
  );
}

export default App;
