import { Box, Button, Stack, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";

type Props = {}

const ReservationCard = (props: Props) => {
  return (
    <Box bgcolor="primary.main" p={1} mt={3}>

    <Typography variant="h6" fontWeight="bold">360 ETB</Typography>

    <Stack direction="row" spacing={1} mt={5}>
        <Box bgcolor="secondary.light"  p={.5}>
            <TextField variant="outlined" name="checkin" color="success" label="checkin" />
        </Box>

        <Box  bgcolor="secondary.light"  p={.5}>
            <TextField variant="outlined" name="checkout" label="checkout" color="success"  />
        </Box>
    </Stack>


    <Box  bgcolor="secondary.light" p={.5} mt={1} mb={1}>
        <TextField variant="outlined" name="guest" label="Guest" color="success"  />   
    </Box>

    <Button
     variant="contained"
     color="secondary" 
     sx={{boxShadow:"none",borderRadius:10,width:"100%"}}
     >
        Reserve 
    </Button>

    <Box>
        <Typography fontWeight="bold" textTransform="capitalize" mt={1}> Price details</Typography>
   

        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Typography fontWeight={"bold"}>  360 * 4 stay</Typography> 
                     </TableCell>
                    <TableCell>1246 ETB</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography fontWeight={"bold"}>Fee</Typography>
                    </TableCell>
                    <TableCell>2%</TableCell>
                </TableRow>
            </TableBody>
        </Table>
   
    </Box>


    </Box>
    
   
  )
};

export default ReservationCard;