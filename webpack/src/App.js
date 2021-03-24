import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Users from './containers/Users'
import asyncComponent from './hoc/asyncComponent';

const asyncImage = asyncComponent(() => {
  return import('./containers/ImageContainer')
})

class App extends Component {
    render(){
        return(
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="/image">Image</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Route path="/image" component={asyncImage} />
                </div>
            </div>
        )
    }
}

export default App;