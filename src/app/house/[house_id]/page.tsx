
import About from '@/components/About'
import HostCard from '@/components/HostCard'
import HouseImagelist from '@/components/HouseImagelist'
import Linear from '@/components/Linear'
import ReservationCard from '@/components/ReservationCard'
import ReviewCard from '@/components/ReviewCard'
import { GetById } from '@/utils/gethouse'
import { Star } from '@mui/icons-material'
import { Box, Container, Grid, Rating, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default async function HouseDetail ({params:{house_id},}:{params:{house_id:string}}){
  
  
  console.log(house_id)
  const data = await GetById(house_id)
  const {host,description,review,rating,img,amenities}=data

  // console.log(data[0])
  return (
    <>
    <Grid container spacing={1}>
      <Grid item md ={3} >
        <HostCard Data={host}/>

      </Grid>

      <Grid item md={9}>
        <HouseImagelist itemData={img} />
      </Grid>
    </Grid>


    <Grid container spacing={1}>
          <Grid item md={9}>
            <About description={description} amenities={amenities}/>
          </Grid>
          <Grid item md={3}>
            <ReservationCard/>
          </Grid>
      </Grid>


     <Box>
      <Typography variant="h5" fontWeight="bold" mt={2}  mb={3}>Guest Rating and Review About The Place</Typography>
      <Grid container spacing={1}>
        <Grid item md={3} >
          <Box bgcolor="secondary.main" p={1} mt={1} sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"165px"}}>
            <Container sx={{textAlign:"center"}}>
                
                <Typography variant="h2" fontWeight="bold" textAlign="center">{ rating}</Typography>
                <Rating 
                  name="half-rating-read" 
                  defaultValue={rating}
                  precision={0.5}
                  readOnly
                  size="large"/>
            </Container>
          </Box>

        </Grid>
          <Grid item md={9} >
          <Linear count={20} helperText="Excellent" star={5}/>
          <Linear  count={30} helperText="Very Good" star={4}/>
          <Linear  count={25} helperText="Average" star={3}/>
          <Linear  count={10} helperText="Poor" star={2}/>
          <Linear  count={5} helperText="Terrible" star={1}/>

            {review.map((item,index)=><ReviewCard key={index} data={item}/>)}
          </Grid>
          
        </Grid>
     </Box>
        

        





    </>
  )
}