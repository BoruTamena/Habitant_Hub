import { Box, LinearProgress, Stack, Typography } from "@mui/material";

type Props = {}

const Linear = (props: Props) => {
  return (
    
      <Stack>
        <LinearProgress 
         variant="determinate" 
         value={50} 
         sx={{bgcolor:"secondary.main",
         height:10,
         borderRadius:10}}/>
         
          <Typography> Excellent </Typography>
 
      </Stack>
    
  )
};

export default Linear