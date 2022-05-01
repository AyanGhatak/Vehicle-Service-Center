import { Box, Typography } from '@mui/material';
import ServiceCustomer from '../components/ServiceCustomer';
import users from '../components/users';

export default function User() {
    const user = users[0]
    return (
        <Box>
            <Typography variant="h5" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                {user.name}
            </Typography>
            <Typography variant="inherit" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                Contact: {user.mobile}
            </Typography>
            <Typography variant="inherit" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                Address: {user.address}
            </Typography>
            <Typography variant="inherit" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                Vehicle Number: {user.vehicleNo}
            </Typography>
            <Typography variant="inherit" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                Email: {user.email}
            </Typography>

            <Typography variant="h5" component="div" gutterBottom sx={{ margin: "30px auto" }}>
                Recent Services
            </Typography>

            <ServiceCustomer idx={0} />
        </Box>
    )
}