import { Search } from '@mui/icons-material'
import { Box, FormControl, IconButton, Stack, TextField } from '@mui/material'
import React from 'react'

const PrimarySearch = () => {
  return (
    <>
    <form>
        <Box sx={{bgcolor:"secondary.main",height:"30px",padding:"10px",borderRadius:"30px",margin:"5px"}}>
          <Stack flexDirection="row" justifyContent="space-around" alignItems="center">
            <Box>
            <TextField variant="standard" name="location" label="location" sx={{position:"relative",top:-20,width:"100px"}}/>

            </Box>

            <Box>
            <TextField variant="standard" name="guest" label="Guest" sx={{position:"relative",top:-20,width:"100px"}}/>

            </Box>


            <Box>
            <TextField variant="standard" name="guest" label="Guest" sx={{position:"relative",top:-20}} />

            </Box>
             <IconButton  variant="primary.main">
                <Search/>
            </IconButton>


            </Stack>
        </Box>
    </form>
    </>
  )
}

export default PrimarySearch