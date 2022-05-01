import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import type { BasicTableProps } from "./BasicTable";
import centers from "./centers";

export default function ServicesList(props: BasicTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>CustomerName</TableCell>
                <TableCell align="right">Completion Date</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Brand</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {centers[props.idx].services.map((row) => (
                <TableRow
                    key={row.customerName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.customerName}
                    </TableCell>
                    <TableCell align="right">{row.date}</TableCell>
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