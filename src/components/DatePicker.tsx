import DateTimePicker from 'react-datetime-picker';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function DatePicker() {
    const [dateVal, onDateChange] = useState(new Date());
    return (
        <Box sx={{'width': '100%', "margin": "10px auto", "display": 'flex', "flex-direction": "column"}}>
            <DateTimePicker onChange={onDateChange} value={dateVal} />
        </Box>
        
    );
  }