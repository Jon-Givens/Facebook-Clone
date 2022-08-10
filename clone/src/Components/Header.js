import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Avatar, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';

export default function Header() {
    return (
        <AppBar
        style={{backgroundColor: '#32469e'}}
        color="default"
        elevation={0}
        sx={{
          position: 'sticky',
          borderBottom: (t) => `3px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          
            <Typography variant="h6" color="inherit" noWrap align="left" style={{color: 'white'}}  >
                Code Differently
            </Typography>
            <Container>
            <TextField  id="outlined-search" size="small" label="Search" type="search" sx={{backgroundColor: 'white', borderColor: 'white', width: 600}}  />
            </Container>
            <Stack direction="row" spacing={1} align="right">
                <EmailIcon sx={{color: 'white', height: 30, width: 30}} />
                <NotificationsIcon sx={{color: 'white', height: 30, width: 30}}  />  
              <Avatar sx={{ height: 30, width: 30}} src="https://lh3.googleusercontent.com/X_bMHrDNO7bXnSH_sy_b9DKG1XUbMysFvuShmlYFtyshk_tYiI4ll1rRz5E25ex-wZGDFYy6s3pNpBXuKLGWaf492QYokcEFnFXmB0LhiiomUP9SoiIuAfGQdul9qMZHcoh7jSg_r2Ct8i1jOON6pjeIy6KbHKuMP3C1nWQmKhcisHXlJQ431X-ObfJFK7dmDn8lKfEYpF2wr4XPG5MgrMz0NCt91TuPJyg2znIBZ8KQTpiXC81ae4cIC5CAavo0YXESgo1nos2ZBnegtEjE4QF4UUL9MWOIi1cTUMf13IloLWBIwlqezJu9UtPAswriNVv_jl2JE8lM_Q6oq3FvqvQms8ArDI4qKciCXHjCeinjeG8tgQ8unlvCoj2unyuQyU1MJeJMXvG6miBni3pWoXFlGIVOyDpB1oEPRYnSepYd8GPOjLQxvVd7h-dUI1UfefUWS2iGuFW6xEYBZBmKtgAhJCF26ui2BIq6mRAJCnPztutWN-LVRVzd41pKEYbwuuPfeqmexQEz1BtP62LR5PPFU83ShgatNVj6RichXT3AQ3XJP5tavYjQjTVOa9DiznjvEHU4YivEZV0S6ocFSNEwRtKbdKPRNKGcBLtNiEa4zMbkUFH4TDqJgeURjxfjma-GlezCiEQLtV_VQ4krKKXkhkhB9uDSGK44ML4E_ERtr4I3QYFtpbKNZuufWa04CoMScFwOVTPlmZOtcLUh6y0DQbRgyjZHUlyVkNOdHY_OSRA4N9V2jS8CDUQ=w706-h940-no?authuser=0"></Avatar>
            </Stack>
        </Toolbar>
      </AppBar>
    
    )   

}