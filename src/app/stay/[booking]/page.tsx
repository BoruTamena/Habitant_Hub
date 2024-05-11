import { Add, CheckBox } from "@mui/icons-material";
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { BiMinus } from "react-icons/bi";
import BookingDetail from "./component/BookingDetail";
import RuleLists from "./component/RuleLists";

type Props = {}

const page = ({searchParams}:{searchParams:any}) => {

    const {childrens,adult,infant,pit}=searchParams
  return (
    <Container>
    
    <Typography variant="h5"  fontWeight={"bold"} textOverflow={"capitalize"} mt={5}>Booking Process  </Typography>


    <Grid container spacing={2}>

        <Grid item md={4}  sx={{position:"sticky",left:0,top:0}}>
           <BookingDetail 
            adult={adult}
            infant={infant}
            pit={pit}
            childrens={childrens}
            />


            <Box  mt={2}>
                <Typography fontWeight={"bold"} textTransform={"capitalize"}>Choose How to Pay</Typography>

                <Stack spacing={1} mt={2}>
                    <Box bgcolor="primary.main" p={1} borderRadius={4}>
                      
                            <Typography
                             textTransform={"capitalize"}
                             textAlign="center">Pay Cash at place</Typography>

                        
                       
                    </Box>

                    <Box bgcolor="primary.main" p={1} borderRadius={4}>
                        <Typography  
                        textTransform={"capitalize"} 
                        textAlign="center" >Pay now</Typography>
                    </Box>


                </Stack>
            </Box>
        </Grid>

        <Grid item md={8}>
            <Typography variant="h6" mt={2} textTransform={"capitalize"}>Pay With </Typography>

            <FormControl fullWidth sx={{mt:2}}>
              <InputLabel id="demo-simple-select-label">Pay with</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Credit or dept card"}
                label="Pay With"
                // onChange={handleChange}
                >
                <MenuItem value={10}>Credit or dept Card</MenuItem>
                <MenuItem value={20}>PayPal</MenuItem>
                <MenuItem value={30}>Chapa</MenuItem>
                </Select>
            </FormControl>


            <Typography variant="h6" mt={2} textTransform={"capitalize"}>Good To Know  </Typography>
            
            <RuleLists/>

            <Button 
                variant="contained" 
                color="secondary" 
              
                sx={{boxShadow:"none",width:"100%",p:1,mt:2,borderRadius:4}}

            >Confirm and Pay</Button>
        </Grid>

    </Grid>


    </Container>
  )
};

export default page;