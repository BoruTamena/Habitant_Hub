
import About from '@/components/About'
import HostCard from '@/components/HostCard'
import Linear from '@/components/Linear'
import ReviewCard from '@/components/ReviewCard'
import { GetById } from '@/utils/gethouse'
import { Star } from '@mui/icons-material'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default async function HouseDetail ({params}:{params:{house_id:string}}){
  
  const {house_id} =params

  const data = await GetById(1)
  const {host,description,review,rating}=data

  // console.log(data[0])
  return (
    <>
    <Grid container spacing={1}>
      <Grid item md ={3}>
        <HostCard Data={host}/>

      </Grid>

      <Grid item md={9}>
      </Grid>
    </Grid>


    <Grid container spacing={1}>
          <Grid item md={9}>
            <About description={description}/>
          </Grid>
          <Grid item md={3}>

          </Grid>
      </Grid>


     <Box>
      <Typography variant="h5" fontWeight="bold" mt={2}  mb={3}>Guest Rating and Review About The Place</Typography>
      <Grid container spacing={1}>
        <Grid item md={3} >
          <Box bgcolor="secondary.main" p={1}  sx={{height:100}}>
            <Container sx={{textAlign:"center"}}>
                <Typography variant="h5" fontWeight="bold" textAlign="center">{ rating}</Typography>
                {["","","","",""].map(item=><Star/>)}
            </Container>
          </Box>

        </Grid>
          <Grid item md={9} >
          <Linear/>
          <Linear/>
          <Linear/>
          <Linear/>
          <Linear/>

            {review.map(item=><ReviewCard data={item}/>)}
          </Grid>
          
        </Grid>
     </Box>
        

        





    </>
  )
}