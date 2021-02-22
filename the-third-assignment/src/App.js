import React, { Component } from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';


class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
            <nav>
                <ul style={{listStyle: 'none', margin:'auto', padding: '0'}}>
                    <li style={{margin:'10px', display:'inline-block'}}><NavLink to='/'>Home</NavLink></li>
                    <li style={{margin:'10px', display:'inline-block'}}><NavLink to='/Users'>Users</NavLink></li>
                    <li style={{margin:'10px', display:'inline-block'}}><NavLink to='/Courses'>Courses</NavLink></li>
                </ul>
            </nav>
        </header>
        <Switch>
            <Route path='/' exact />
            <Route path='/Users' component={Users}/>
            <Route path='/Courses' component={Courses}/>
            <Redirect from='/all-courses' to='/Courses' />
            <Route render={()=> <h1> 404 </h1>} />
        </Switch> 
      </div>
    );
  }
}

export default App;
