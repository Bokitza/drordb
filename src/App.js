import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
//pages and components
import Home from './pages/Home'
import login from './pages/login'
import UploadExcel from './pages/UploadExcel'
import users from './pages/users'
import Profile from './pages/Profile'

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
              <Route exact path="/users" component={users} />
              <Route exact path="/uploadexcel" component={UploadExcel} />
              <Route path="/userquery/:id" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
