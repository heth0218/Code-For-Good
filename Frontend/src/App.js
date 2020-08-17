import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Login from './components/Login'
import Register from './components/Register';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Students from './components/Students';
import Direction from './components/Direction'
import StudentAddition from './components/StudentAddition';
import Questions from './components/Questions'
import Charts from './components/Charts'

const App = () => {

  useEffect(() => {
    //Initializes materialize js
    M.AutoInit();
  })

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Students} />
          <Route exact path='/direction' component={Direction} />
          <Route exact path='/addStudent' component={StudentAddition} />
          <Route exact path='/questions' component={Questions} />
          <Route exact path="/chart" component={Charts} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
