import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
 
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




function App() {

    const [users, SetUsers] = useState([])

    const getUserData = async () =>{

      try{
        const data = await axios.get("https://jsonplaceholder.typicode.com/users")
        SetUsers(data.data)
      }
      catch(e){
        console.log("error")
      }
    };

    useEffect(() =>{
      getUserData();
    }, []);


  return (
    <div className="App">
        <h1>ITech</h1>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Id&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Username&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Phone&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}

export default App;
