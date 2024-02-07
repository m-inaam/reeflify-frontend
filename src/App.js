import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OurWork from './components/pages/OurWork';
import Team from './components/pages/Team';
import AiModel from './components/pages/AIModel';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/our-work' component={OurWork} />
          <Route path='/team' component={Team} />
          <Route path='/ai-model' component={AiModel} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
