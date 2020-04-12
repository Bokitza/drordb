import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import dashboard from './pages/dashboard'
//pages and components
import Home from './pages/Home'
import login from './pages/login'
import salarysheet from './pages/salarysheet'
import users from './pages/users'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/dashboard" component={dashboard} />
              <Route exact path="/users" component={users} />
              <Route exact path="/uploadsalary" component={salarysheet} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
