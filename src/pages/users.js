import React, { Component } from 'react';
import axios from 'axios';
import Userprofile from './Userprofile'
import '../App.css'
import Container from '@material-ui/core/Container';


export class users extends Component {

    //set initial state to null
    state={users:null}

    //when loading to screen to a post request
    componentDidMount(){
        axios.get(
        //url of request  
        '/users',
        //body of request
        {
     
        })
        .then(res=>{
            this.setState(
                {users:res.data}
            );
            console.log(res)
        }).catch(err=>{console.log(err)})
    }

    render() {
        let showUsers = this.state.users 
        ?
            (this.state.users.map(e=><Userprofile user={e}/>))
             : 
             <p> טוען...</p>
        return (
            <Container>
            <div> כאן יש כל מיני פילטרים לחפש לפיהם אנשים</div>
               <div>{showUsers} </div>
            </Container>
        )
    }
}

export default users
