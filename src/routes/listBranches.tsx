import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import CarRepairIcon from '@mui/icons-material/CarRepair';
import centers from '../components/centers';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import BranchDetail from "../components/BranchDetail";

export default function ListBranches() {
    const [selectedIdx, updateSelectedIdx] = useState(-1)
    function handleClick(idx: number) {
        updateSelectedIdx(idx)
    }
    if (selectedIdx >= 0) {
        return <BranchDetail idx={selectedIdx}/>
    } else {
        return (
            <>
                <Typography variant="h5" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                    Select Service Center
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
						centers.map((center, idx) => {
							const text = `Address: ${center.add}, 
							Contact: ${center.mobile} / ${center.landline},
							Email: ${center.email}`
							return (
								<ListItem key={idx} onClick={() => handleClick(idx)} sx={{cursor: 'pointer'}}>
									<ListItemAvatar>
										<Avatar>
											<CarRepairIcon />
										</Avatar>
									</ListItemAvatar>
									<ListItemText primary={center.name} secondary={text} />
								</ListItem>
							)
						})
					}
                </List>
            </>
        );
    }
  }