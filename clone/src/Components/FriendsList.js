import * as React from 'react';
import { ListItem, ListItemButton, ListItemIcon, Stack, Typography, TextField, Box} from '@mui/material';
import List from '@mui/material/List'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function FriendsList() {
    return(
        <Box bgcolor="pink" flex={2}>
            <Typography variant="h5" align="left" sx={{marginBottom: 1}} > Online Friends</Typography>

            <AvatarGroup >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>

            <Typography variant="h5" align="left"> Latest Photos</Typography>
        </Box>
    )
}