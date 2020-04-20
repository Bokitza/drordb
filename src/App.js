import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
//pages and components
import Home from './pages/Home'
import Login from './pages/Login'
import UploadExcel from './pages/UploadExcel'
import UserQuery from './pages/UserQuery'
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
              <Route exact path="/login" component={Login} />
              <Route exact path="/users" component={UserQuery} />
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
