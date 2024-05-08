import { Box, Button, Stack } from "@mui/material";
import { Amenities } from "../../constant/Amenities";



type Props = {}

const SecondaryFilter = (props: Props) => {
  return (
   <Box bgcolor="primary.light" mt={1} p={1} sx={{overflow:"scroll",scrollPadding:" 0px 0px 9999px 0px"}}>

    <Stack direction={"row"} spacing={3} >
      {
        Amenities.map((item,index)=><span style={{fontSize:"25px"}}>{item.icon}</span>)
      }

      <Button
       variant="contained"
       
       color="secondary" 
       sx={{boxShadow:"none",borderRadius:10}} >
        Filter
      </Button>

    </Stack>

   </Box>
  )
};

export default SecondaryFilter;