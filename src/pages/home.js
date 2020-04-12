import React, { Component } from 'react'
import Grid from '@material-ui/core/grid'



export class home extends Component {

    render() {
        return (
            <div>
            <Grid container>
                <Grid item xs={3}/>
                <Grid item sm={6}>  
                <h2>ברוכים הבאים למערכת שאור צריך להגיד מה קורה בה!</h2>

                 </Grid>
                <Grid item sm={3}/>
            </Grid>
            <h2> אל תדאגו... יהיה טונה דברים מגניבים...</h2>
            
            </div>
        )
    }
}

export default home
