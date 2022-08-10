import { ListItemButton, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import * as React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import ListItemText from '@mui/material/ListItemText';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';

export const SideBarList = (
    <React.Fragment >
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
            <Switch  />
        </ListItemButton>
        
    </React.Fragment>
)