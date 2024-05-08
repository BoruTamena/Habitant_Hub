import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";

type Props = {}

const Linear = (props: Props) => {
  return (
    
      <Grid container spacing={1}>
        <Grid item md={8}>
        <LinearProgress 
        
         variant="determinate" 
         value={50} 
         sx={{bgcolor:"secondary.main",
         height:15,
         padding:.5,
         margin:1,
         borderRadius:10}}/>
        </Grid>

        <Grid item md={4}>
        <Typography textAlign=""> Excellent </Typography>

        </Grid>
      </Grid>
      
       

        
         
 
    
    
  )
};

export default Linear