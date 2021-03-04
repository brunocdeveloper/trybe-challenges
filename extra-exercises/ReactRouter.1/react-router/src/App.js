import React, { Component } from 'react';
import Aulas from './components/Aulas';
import Home from './components/Home';
import Nav from './components/Nav';
import Sobre from './components/Sobre';
import Aula from './components/Aula';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/aulas/:id' component={Aula} />
            <Route path='/aulas' component={Aulas} />
            <Route path='/sobre' component={Sobre} />
            <Route path='*'><div>Essa rota não existe</div></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}