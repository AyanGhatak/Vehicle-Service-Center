import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import type { BasicTableProps } from "./BasicTable";
import centers from "./centers";
import users from "./users";

export default function ServiceCustomer(props: BasicTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Completion Date</TableCell>
                <TableCell align="right">Branch Name</TableCell>
                <TableCell align="right">Branch Address</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Brand</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users[props.idx].services.map((row) => (
                <TableRow
                    key={row.date}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.date}
                    </TableCell>
                    <TableCell align="right">{row.branchName}</TableCell>
                    <TableCell align="right">{row.branchAdd}</TableCell>
                    <TableCell align="right">{row.vehicleNumber}</TableCell>
                    <TableCell align="right">{row.vehicleType}</TableCell>
                    <TableCell align="right">{row.vehincleBrand}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    )
}