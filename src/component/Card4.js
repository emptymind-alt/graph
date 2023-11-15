import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Account, ThisMonth, YTD) {
  return { Account, ThisMonth, YTD };
}

const rows = [
  createData('Sales', 1194.58,11418.29),
  createData('Advertising', 6879.02,971.36),
  createData('Inventory', 4692.06,9768.09),
  createData('Entertainment', 0.00,0.00),
  createData('Product', 4652.10,2529.90),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell  ><b>Account</b></TableCell>
            <TableCell align="right"><b>ThisMonth</b></TableCell>
            <TableCell align="right"><b>YTD</b></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sm={{ '&:last-child td, &:last-child th': {  } }}
            >
              <TableCell component="th" scope="row">
                {row.Account}
              </TableCell>
              <TableCell align="right">{row.ThisMonth}</TableCell>
              <TableCell align="right">{row.YTD}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}