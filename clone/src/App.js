import './App.css';
import Clone from './Components/Clone.js'
import Header from './Components/Header.js'
import textField, { Typography } from '@mui/material'
import FriendsList from './Components/FriendsList';
import {Box, Stack} from "@mui/material"
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';


function App() {
  return (
    <Box>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <FriendsList />
      </Stack>
    </Box>
  );

}

export default App;
