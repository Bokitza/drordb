import { TableCell } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React, {useState} from 'react'
import Uploadsalary from '../components/uploader'
import {makeStyles} from '@material-ui/core/styles'
import Uploadtodb from '../components/Uploadtodb'

let counter = 0;
const uniquer = () => {counter++; return counter}

const useStyles = makeStyles({
  table: {
    background: 'linear-gradient(45deg, rgba(0,0,0,1),rgba(80,80,80,1) )',
  },
  heads: {
    color: "rgba(255,255,255,1)",
    direction: "rtl",
    textAlign: "right",
    fontWeight: "bold"
  },
  cells: {
    color: "rgba(200,200,200,1)",
    direction: "rtl",
    textAlign: "right",
  },

});

export default function UploadExcel() {

  const [excel, setExcel] = useState()
  const classes = useStyles()
  return (
    <div>
      <Uploadsalary>
        {(tableData) => {
          setExcel(tableData)
          return (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {(tableData.length > 0
                      ? Object.keys(tableData[0])
                      : []
                    ).map((header) => (
                      <TableCell key={uniquer()} className={classes.heads}>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={uniquer()}>
                      {Object.values(row).map((cell) => 
                      (
                        <TableCell key={uniquer()} className={classes.cells}>{cell}</TableCell>
                      )
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        }}
      </Uploadsalary>
      <Uploadtodb>{(excel)?excel:null}</Uploadtodb>
    </div>
  )
}

