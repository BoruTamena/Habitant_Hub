import { Search } from '@mui/icons-material'
import { Box, FormControl, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const PrimarySearch = () => {
  return (
    <>
    
    <Stack 
      flexDirection="row"
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{bgcolor:"secondary.main",borderRadius:10,padding:.5}}
    
    >

      <Box ml={1}>
        <Typography fontWeight={"bold"} p={.5}>Location</Typography>
      </Box>
      <Box  ml={2}>
        <Typography  fontWeight={"bold"} p={.5}>Guest</Typography>
      </Box>
      <Box  ml={2} mr={2}>
        <Typography  fontWeight={"bold"} p={.5}>CheckIn-CheckOut</Typography>
      </Box>
      <IconButton>
         <Search/>
      </IconButton>
    </Stack>
    
    </>
   
  
  )
}

export default PrimarySearch