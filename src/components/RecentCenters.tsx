import { Avatar, Box, FormControl, FormControlLabel, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup } from "@mui/material";
import CarRepairIcon from '@mui/icons-material/CarRepair';
import React, { useState } from 'react';
import centers from './centers';



export default function RecentCenters() {
    const [value, setValue] = React.useState('recent');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
			<Box sx={{ display: 'flex', "flex-direction": "column" }}>
				<FormControl>
					<RadioGroup sx={{ display: 'flex', "flex-direction": "row" }}
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="female"
						name="radio-buttons-group"
						value={value}
						onChange={handleChange}
					>
						<FormControlLabel value="recent" control={<Radio />} label="Last Service Center" />
						<FormControlLabel value="near" control={<Radio />} label="Near me" />
					</RadioGroup>
				</FormControl>
				<List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
					{
						centers.slice(0,2).map(center => {
							const text = `Address: ${center.add}, 
							Contact: ${center.mobile} / ${center.landline},
							Email: ${center.email}`
							return (
								<ListItem>
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
			</Box>
    );
  }
