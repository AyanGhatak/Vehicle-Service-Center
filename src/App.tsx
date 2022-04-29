import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{'margin': '10px 20px'}}>
      <h1>My Service Center</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Home</Link> |{" "}
        <Link to="/newappo">Schedule a new Appointment</Link> |{" "}
        <Link to="/listBranches">Service Centers</Link>
      </nav>
      <Outlet />
    </Box>
  );
}

export default App;
