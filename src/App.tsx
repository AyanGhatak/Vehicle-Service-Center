import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import logo from './logo.jpeg';

function App() {
  return (
    <Box sx={{'margin': '10px 20px'}}>
      <div className='headerBanner'>
        <img src={logo} alt="Logo" width="100" height="100" />;
        <h1>My Service Center</h1>
      </div>
      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/newappo">Schedule a new Appointment</Link> |{" "}
        <Link to="/listBranches">Service Centers</Link>
      </nav>
      <Outlet />
    </Box>
  );
}

export default App;
