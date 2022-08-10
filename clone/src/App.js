import './App.css';
import Clone from './Components/Clone.js'
import Header from './Components/Header.js'
import textField, { createTheme, ThemeProvider, Typography } from '@mui/material'
import FriendsList from './Components/FriendsList';
import {Box, Stack} from "@mui/material"
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import { useState } from 'react';


  

function App() {
  
const [mode, setMode] = useState("light")

const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
})

  return (
    <ThemeProvider theme={darkTheme}>
    <Box>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode} />
      <Feed />
      <FriendsList />
      </Stack>
    </Box>
    </ThemeProvider>
  );

}

export default App;
