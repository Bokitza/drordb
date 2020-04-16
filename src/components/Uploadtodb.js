import React from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'



export default function Uploadtodb(props) {
    const UploadSheet = () => {

        props.children.forEach((e) => { console.log(e["ת.ז"]);
        
        axios.post(
            //url of request  
            '/users',
            //body of request
            e)
            .then(res=>{
                console.log(res)
            }).catch(err=>{console.log(err)})})
       
         }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={UploadSheet}> העלה לשרת </Button>
        </div>
    )
}
