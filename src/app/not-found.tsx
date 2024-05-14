import { Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
 
      <>
      <Typography variant='h3' textAlign={"center"} mt={5} p={2}>Error404 - Page Not Found</Typography>
    <Container>
      <Grid container spacing={1}>

      <Grid item md={4}mt={5}>
          <Image
           layout='responsive'
           width={200}
           height={500}
           src="/image/404-error.avif"
           alt="error"

           style={{borderRadius:10}}
          
          />

        </Grid>

        <Grid item md={8} mt={5}>
          <Typography variant="h6" textTransform={"capitalize"}>Oops! Can't find what you're looking for?</Typography>
          <Typography p={2} textAlign={"justify"} lineHeight={2}>
            Error404 makes it easy to navigate without technical knowledge. 
            Just search for what you need, and we'll guide you through the process.
          </Typography>
          <Link href="/">
            <Button
              variant='contained'
              color="secondary"
              sx={{borderRadius:5 ,m:2,boxShadow:"none"}}
              
              >
               <Typography textTransform={"capitalize"}>Return Home</Typography>
            </Button>
          </Link>
        </Grid>

       
      </Grid>
      </Container>
     

      </>
      
  )
}