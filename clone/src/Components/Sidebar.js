import * as React from 'react';
import List from '@mui/material/List';
import { SideBarList } from './SideBarList';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import { ListItemButton, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import ListItemText from '@mui/material/ListItemText';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';

const fabStyle = {
  position: 'fixed',
  bottom: 50,
  left: 30,
};

export default function Sidebar(mode,setMode) {
    return (
      <Box flex={1}>
            <Box sx={{position: 'fixed'}}>
              <List component="nav" sx={{width: 350,  marginLeft: 4}}>
              <ListItemButton sx={{marginBottom: 2}}>
            <ListItemIcon>
                <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText primary="Homepage" />
        </ListItemButton>
        <ListItemButton sx={{marginBottom: 2}}>
            <ListItemIcon>
                <PersonIcon></PersonIcon>
            </ListItemIcon>
            <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton sx={{marginBottom: 2}}>
            <ListItemIcon> 
                <SettingsIcon></SettingsIcon>
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton sx={{marginBottom: 2}}>
            <ListItemIcon> 
                <StorefrontIcon></StorefrontIcon>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
        </ListItemButton>
        <ListItemButton sx={{marginBottom: 2}}>
            <ListItemIcon> 
                <AccountBoxIcon></AccountBoxIcon>
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton sx={{marginBottom: 2}}>
            <ListItemIcon> 
                <GroupIcon></GroupIcon>
            </ListItemIcon>
            <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton sx={{marginBottom: 2}}>
            <ListItemIcon> 
                <ArticleIcon></ArticleIcon>
            </ListItemIcon>
            <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton sx={{marginBottom: 2}}>
            <ListItemIcon> 
                <ModeNightIcon></ModeNightIcon>
            </ListItemIcon>
            <Switch onchange={e=>setMode(mode === "light" ? "dark" : "light")} />
        </ListItemButton>
              </List>
              
              <Fab color="primary" aria-label="add" style={fabStyle} sx={{backgroundColor: '#32469e'}}>
                <AddIcon />
              </Fab>
            </Box>
          </Box>
    ) 

}