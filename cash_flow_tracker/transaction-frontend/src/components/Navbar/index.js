import * as React from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TableRowsIcon from '@mui/icons-material/TableRows';



export default function Navbar(){

    const [state, setState] = React.useState(false);
    

    const toggleDrawer = (open = !state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState(!state);
        console.log(state);
    };
    /*

    const [stateUpdater, setStateUpdater] = React.useState(false);
    const toggleUpdater = (open = !stateUpdater) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
      }
  
      setStateUpdater(!stateUpdater);
      console.log(stateUpdater);
    };
    */
    const pages = [
        {name: "Data List", icon: <TableRowsIcon />, target: "#"}
    ];

    const list = (anchor) => (
        <div>
            <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
            >
            </Box>
            <List>
            {pages.map((text, index) => (
                <ListItem key={text.name} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {text.icon}
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </div>
      );

    return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer()}
            >
                <MenuIcon />
                
            </IconButton>
          <Drawer
            open={state}
            onClose={toggleDrawer(false)}
          >
             <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer()}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
            {list("left")}
          </Drawer>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Cash Track
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    );
}