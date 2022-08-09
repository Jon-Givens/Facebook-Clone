import { Avatar, CardActionArea, TextField } from "@mui/material";
import React from "react";
import Header from "./Header"
import Sidebar from "./Sidebar"
import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FriendsList from "./FriendsList";
import Box from "@mui/material/Box";

export default function Clone() {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <FriendsList></FriendsList>
        </div>

    )
 

    }