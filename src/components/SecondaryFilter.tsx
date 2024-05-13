import { Box, Button, Stack } from "@mui/material";
import { Amenities } from "../../constant/Amenities";




type Props = {}

const SecondaryFilter = (props: Props) => {
  return (
   <Box bgcolor="primary.light" mt={1} p={1}
    sx={{overflow:"scroll"}}>

    <Stack direction={"row"} spacing={2}  >
      {
        Amenities.map((item,index)=><span key={index} style={{fontSize:"25px"}}>{item.icon}</span>)
      }

      <Button
       variant="contained"
       color="secondary" 
       sx={{boxShadow:"none",borderRadius:5}} 
  
       >
        Filter
      </Button>


      

    </Stack>

   </Box>
  )
};

export default SecondaryFilter;