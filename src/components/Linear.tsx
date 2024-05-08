import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";

type Props = {
  count:number,
  star:number,
  helperText:string,
 
}

const Linear = (props: Props) => {

  const {count,star,helperText}=props
  return (
    
      <Grid container spacing={1}>
        <Grid item md={8}>
        <LinearProgress 
         variant="determinate" 
         value={count} 
         sx={{bgcolor:"secondary.main",
         height:15,
         padding:.5,
         margin:1,
         borderRadius:10}}/>
        </Grid>

        <Grid item md={4}>
          <Stack direction={"row"} spacing={2}>
          <Typography textAlign="center" fontWeight={"bold"} p={1}>{star} </Typography>
          <Typography textAlign="center"  fontWeight={"bold"}  p={1}>{helperText} </Typography>

          </Stack>

        </Grid>
      </Grid>
      
       

        
         
 
    
    
  )
};

export default Linear