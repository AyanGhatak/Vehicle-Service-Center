import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import centers from "./centers";

export interface BasicTableProps {
    idx: number;
}

export default function BasicTable(props: BasicTableProps) {
return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Joining Date</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Supervisor Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {centers[props.idx].employees.map((row) => (
            <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">{row.designation}</TableCell>
                <TableCell align="right">{row.add}</TableCell>
                <TableCell align="right">{row.mobile}</TableCell>
                <TableCell align="right">{row.joiningDate}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">{row.supervisorEmail}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}