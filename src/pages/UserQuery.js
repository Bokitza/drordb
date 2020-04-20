import React, { Component, useState } from 'react';
import axios from 'axios';
import '../App.css'
import Userprofile from './Userprofile'



export default function UserQuery() {
    //set initial state to null
    const [users, setUsers] = useState(null);

    if (!users) {
    //when loading to screen to a post request
        axios.get(
        //url of request  
        '/users',
        //body of request
        {
     
        })
        .then(res=>{
            setUsers(res.data);
        }).catch(err=>{console.log(err)})

        return(<h1> טוען חברים...</h1>)}

        else{
            return(
                <div>
                <Userprofile>{users}</Userprofile>
                </div>
                   )
            }
    
        
     
    
}


