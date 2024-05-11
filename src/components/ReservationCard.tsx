"use client"

import { Box, Button, Stack, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {}

interface reservationstate {

    checkin:string;
    checkout:string;
    adult:number;
    children:number;
    pit:number;

}

const ReservationCard = (props: Props) => {

    const [data,setdata]=useState<reservationstate>(
                                                    { checkin:"", 
                                                    checkout:"", 
                                                    adult:0,
                                                    children:0,
                                                    pit:0,}
                                                )

  const router=useRouter()
  const handleReservation=()=>{

    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set("adult",""+data.adult)
    searchParams.set("childrens",""+data.children)
    searchParams.set("pit",""+data.pit)

    const url=`/stay/booking?${searchParams.toString()}`

    router.push(url)
  }

  return (
    <Box bgcolor="primary.main" p={1} mt={3}>

    <Typography variant="h6" fontWeight="bold" mt={1}>360 ETB</Typography>

    <Stack direction="row" spacing={1} mt={3}>
        <Box bgcolor="white"  p={.5}>
            <TextField 
                variant="outlined"
                 name="checkin" 
                 color="success" 
                 label="checkin"
                 />
        </Box>

        <Box  bgcolor="white"  p={.5}>
            <TextField variant="outlined" name="checkout" label="checkout" color="success"  />
        </Box>
    </Stack>


    <Box  bgcolor="white" p={.5} mt={1} mb={1}>
        <TextField variant="outlined" name="guest" label="Guest" color="success"  />   
    </Box>

    <Button
     variant="contained"
     color="secondary" 
     onClick={()=>handleReservation()}
     sx={{boxShadow:"none",borderRadius:10,width:"100%",textTransform:"capitalize"}}
    
     >
        Reserve 
    </Button>

    <Box mt={3}>
        <Typography fontWeight="bold" textTransform="capitalize" mt={1}> Price details</Typography>
   

        <Table>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Typography >  360 * 4 stay</Typography> 
                     </TableCell>
                    <TableCell>1246 ETB</TableCell>
                </TableRow>

                <TableRow>
                    <TableCell>
                        <Typography>Fee</Typography>
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