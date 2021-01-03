import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Instructions from './containers/Instructions/Instructions';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import NotFound from './containers/404/404'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/courses/:id' component={Course} />
          <Switch>
            <Route path='/courses' component={Courses} />
            <Route path='/' exact component={Instructions} />
            <Route path='/users' exact component={Users} />
            <Redirect from='/all-courses' to='/courses' />
            <Route component={NotFound} />
          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
