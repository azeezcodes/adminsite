import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';


interface Column {
  id: 'name' | 'email' | 'class' | 'notes' | 'summaries';
  label: string;
  minWidth?: number | string;
  align?: 'left' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'SUBJECT', minWidth: "30%" },
  { id: 'email', label: 'TOPIC', minWidth: "30%" },
  {
    id: 'class',
    label: 'DATE',
    minWidth: "20%",
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'notes',
    label: 'TEACHERS NAME',
    minWidth: "10%",
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'summaries',
    label: 'SUMMARIES',
    minWidth: "10%",
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  email: string;
  level: string;
  notes: number;
  summaries:  number;
  avatar?: string;
}

function createData(
  name: string,
  email: string,
  level: string,
  notes: number,
  summaries: number,
  avatar?: string
): Data {
  return { name, email, level, notes, summaries, avatar };
}

const rows = [
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar1.png"),
  createData('Edwin Martins', 'James@gmail.com', "JSS3", 4, 3, "/avatar2.png"),
  createData('James Friday', 'John@gmail.com', "SS1", 5, 2, "/avatar3.png"),
  createData('Isaac Oluwatemilorun', 'Sophia@gmail.com', "SS2", 8, 5, "/avatar5.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar4.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar1.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar2.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar3.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar4.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar5.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar1.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar2.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar3.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar4.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar5.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar1.png"),
  createData('Hellena John', 'Amanda@gmail.com', "JSS2", 3, 1, "/avatar2.png"),
  ];

export default function SubjectTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ overflow: 'hidden', width: "100%" }}>
      <TableContainer sx={{ maxHeight: { sm: "46%", md: "48%", lg: "46%" } }}>
        
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{ borderBottom:"none" }}>
            <TableRow style={{ borderBottom:"none" }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, borderBottom:"none", backgroundColor: "#F9F8F9" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                 <TableRow key={row.name}>
              <TableCell style={{ marginTop: 4 }} component="th" scope="row">
                  <div className='flex items-center'>
                      
                      <Avatar
                        alt="Cindy Baker"
                        src={`/static/images/home/${row.avatar}`}
                         sx={{ width: 28, height: 28, marginRight: 1 }}
                      />

                  {row.name}  
                </div>
              </TableCell>
              
              <TableCell style={{ width: "30%", marginTop: 4 }} align="left">
                <div className=''>
                    {row.email}
                </div>
              </TableCell>
              <TableCell style={{ width: "20%", }} sx={{ marginTop: "8%" }} align="left">
                <div className=''>       
                    {row.level}
                </div>
              </TableCell>
            <TableCell style={{ width: "10%", }} sx={{ marginTop: "8%" }} align="center">
                <div>
                    {row.notes}
                </div>
              </TableCell>
              <TableCell style={{ width: "10%",}} sx={{ marginTop: "8%" }} align="center">
                <div>
                    {row.summaries}
                </div>
              </TableCell>
            </TableRow>
              )
              
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}