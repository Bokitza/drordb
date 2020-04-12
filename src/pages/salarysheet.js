import React from 'react'
import Uploadsalary from './uploader'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function salarysheet(props) {

    var table=props.filesUploaded;
    var headers=null;
    var tableData=null;
    var key=null;
    var newRow=null;
    var allRows=null;
    if (table)
      {key=Object.keys(table[0]);
        //genereate headers
      headers=key.map(e=>
        (<TableCell>{e}</TableCell>));
      

      console.log(tableData)
      
    }

    
    return (
        <div>
            <Uploadsalary/>

        {/* TODO-- make if statement to ensure there is a files in props
        if so, upload it to the table! */
        }
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>

          {headers}

          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>

            {tableData}

            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

//get file from Redux
const connectToRedux = (state) => {return {filesUploaded: state.file}}

export default connect(connectToRedux)(salarysheet)