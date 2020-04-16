import Grid from '@material-ui/core/grid'
import React, { Component } from 'react'
import {Box} from '@material-ui/core/';

export class Home extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3} />
          <Grid item sm={6}>
            <Box color="rgba(200,100,100,1)">מסך הבית</Box>
          </Grid>
          <Grid item sm={3} />
        </Grid>
        <h2> כאן יש גרף מסכם של מצב ההתאגדות שאתה אחראי עליה </h2>
        <h3> ומשימות במידה ויש לך כאלה פתוחות..</h3>
      </div>
    )
  }
}

export default Home
