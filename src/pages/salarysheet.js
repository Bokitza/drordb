import { TableCell } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import React from 'react'
import Uploadsalary from './uploader'

function salarysheet(props) {
  return (
    <div>
      <Uploadsalary>
        {(tableData, headers) => {
          // TODO-- make if statement to ensure there is a files in props if so, upload it to the table!
          return (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {(tableData.length > 0
                      ? Object.keys(tableData[0])
                      : []
                    ).map((header) => (
                      <TableCell>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow>
                      {Object.values(row).map((cell) => (
                        <TableCell>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
        }}
      </Uploadsalary>
    </div>
  )
}

export default salarysheet
