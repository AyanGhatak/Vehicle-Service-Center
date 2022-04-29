import { Typography } from "@mui/material";
import BasicTable, { BasicTableProps } from "./BasicTable";
import centers from "./centers";

export default function BranchDetail(props: BasicTableProps) {
    const detail = centers[props.idx]
    return (
        <>
            <Typography variant="h5" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                {detail.name}
            </Typography>
            <div>
                <span className="boldText">Address: </span>
                <span>{detail.add}</span>
            </div>
            <div>
                <span className="boldText">Mobile: </span>
                <span>{detail.mobile}</span>
            </div>
            <div>
                <span className="boldText">Landline: </span>
                <span>{detail.landline}</span>
            </div>
            <div>
                <span className="boldText">Email: </span>
                <span>{detail.email}</span>
            </div>

            <Typography variant="h5" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                List of Employees
            </Typography>

            <BasicTable idx={props.idx} />
        </>
    )
}