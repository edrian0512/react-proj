import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Link from "./Link";
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';


// Functional Component
const Header = () => {
  // const style = { backgroundColor: "green", color: "black", padding: "10px" }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link component={RouterLink} to='/'>Home </Link>
            <Link component={RouterLink} to='/Gallery'>Gallery </Link>
            <Link component={RouterLink} to='/contact'>Contact</Link>
          </Typography>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Website
          </Typography> */}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header