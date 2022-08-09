import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { SideBarList } from './SideBarList';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

const fabStyle = {
  position: 'absolute',
  bottom: 70,
  left: 30,
};

export default function Sidebar() {
    return (
          <Box flex={1}>
            <List component="nav" sx={{width: 350,  marginLeft: 4}}>
              {SideBarList}
            </List>
            
            <Fab color="primary" aria-label="add" style={fabStyle} sx={{backgroundColor: '#32469e'}}>
              <AddIcon />
            </Fab>
          </Box>
    ) 

}