import React, { Component } from 'react';
import axios from 'axios';
import UserProfile from './userProfile'

export class users extends Component {

    //set initial state to null
    state={users:null}

    //when loading to screen to a post request
    componentDidMount(){
        axios.post(
        //url of request  
        '/usersearch',
        //body of request
        {
            "lastName": "sagi",
            "firstName": "yoav"
        })
        .then(res=>{
            this.setState(
                {users:res.data}
            );
        }).catch(err=>{console.log(err)})
    }

    render() {
        let showUsers = this.state.users ? (
            this.state.users.map(e=>
                <UserProfile user={e}/> 
                ))
             : 
             <p> טוען...</p>
        return (
            <div>
               כאן רואים חברי תנועה 
               <h2> {showUsers} </h2>
            </div>
        )
    }
}

export default users
