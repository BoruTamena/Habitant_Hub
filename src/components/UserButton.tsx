"use client"

import { DensityMedium } from "@mui/icons-material";
import { Box, Stack,Avatar,IconButton,Typography, Popover, ListItemButton, ListItemText, List } from "@mui/material";
import React, { useState } from "react";

type Props = {}

const UserButton = (props: Props) => {

const [anchorEl,setAnchorEl]=useState<HTMLButtonElement|null> (null);

const open = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;

const actions=["Account","Help center","Log out"]

const handleClick=(event:React.MouseEvent<HTMLButtonElement>)=>{

    setAnchorEl(event.currentTarget);

}

const handleClose = () => {
    setAnchorEl(null);
  };


 return (
    <Box sx={{bgcolor:"secondary.main",borderRadius:10}}>
    <Stack alignItems="center" flexDirection="row">

      <Box >
        <Avatar alt="user" src="/image/h1.jpeg" />
      </Box>
      <Box pl={1}>
         <Typography>Boru </Typography>
      </Box>

      <IconButton  onClick={handleClick}>
        <DensityMedium/>
      </IconButton>

    </Stack>

    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}

       
      >

        <List dense>
            {
                actions.map((item,index)=><ListItemButton key={index}>
                    <ListItemText
                    
                    primary={
                        <Typography>{item}</Typography>
                    }
                    />
                </ListItemButton>)
            }
        </List>
        
      </Popover>
</Box>
  )
};

export default UserButton;