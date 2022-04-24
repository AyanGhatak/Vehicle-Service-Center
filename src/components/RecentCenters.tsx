import { Avatar, Box, FormControl, FormControlLabel, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup } from "@mui/material";
import CarRepairIcon from '@mui/icons-material/CarRepair';
import React, { useState } from 'react';



export default function RecentCenters() {
    const [value, setValue] = React.useState('near');

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
				<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					{
						centers.map(center => 
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<CarRepairIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={center.name} secondary={center.add} />
							</ListItem>
						)
					}
				</List>
			</Box>
    );
  }

	const centers = [{
		name: 'Suprement Honda',
		add: 'Ward No 8, NH31, near Vijender Public School, Maranga, Purnia, Bihar 854301',
	}, {
		name: 'Supreme Honda',
		add: 'Sabour Rd, opposite IIT, Fatehpur, Chounka, Bhagalpur, Bihar 813233',
	}, {
		name: 'Pinnacle Honda',
		add: 'Plot No 634 to 637 Bogra, NH 2, Jamuria, Asansol, West Bengal 713332',
	}, {
		name: 'Impression Honda',
		add: '3rd Mile, Sevoke Road Salugara Near Jeevandeep building, Siliguri, West Bengal 734008'
	}]