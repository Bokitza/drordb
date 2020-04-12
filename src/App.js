import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//pages and components
import home from './pages/home'
import login from './pages/login'
import Navbar from './components/navbar'
import dashboard from './pages/dashboard'
import users from './pages/users'
import salarysheet from './pages/salarysheet'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path='/home' component={home}/>
          <Route exact path='/login' component={login}/>
          <Route exact path='/dashboard' component={dashboard}/>
          <Route exact path='/users' component={users} />
          <Route exact path='/uploadsalary' component={salarysheet} />


        </Switch>
      </div> 
      </Router>
      </div>
    )
  }
}

export default App;
