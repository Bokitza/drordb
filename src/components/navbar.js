import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import { Button } from '@material-ui/core'
import Link from 'react-router-dom/Link'

export class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <ToolBar className="toolbar">
          <Button color="inherit" component={Link} to="/login"> התנתק </Button>
          <Button color="inherit" component={Link} to="/dashBoard"> דאש-בורד </Button>
          <Button color="inherit" component={Link} to="/home"> בית </Button>
          <Button color="inherit" component={Link} to="/users"> חיפוש חברים </Button>
          <Button color="inherit" component={Link} to="/uploadexcel"> העלה נתונים </Button>
        </ToolBar>
      </AppBar>
    )
  }
}

export default Navbar