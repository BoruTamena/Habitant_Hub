'use client' // Error components must be Client Components
 
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Container>

      <Box textAlign={"center"} mt={1}> 
        <img height={250} width={400} src="/image/sm.webp"/>
      </Box>

      <Typography variant="h3" textAlign={"center"} mt={3}>Aaah! Something went wrong!</Typography>
      <Typography  textTransform={"capitalize"} textAlign={"center"} mt={3} lineHeight={2}> Brace yourself till we get the error fixed </Typography>
      <Typography  textTransform={"capitalize"}   textAlign={"center"} lineHeight={2}>You may also refresh the page or try agin later </Typography>
     
      <Button
        variant='contained'
        color="secondary"
        sx={{borderRadius:5,textAlign:"center"}}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
           >
        Try again
      </Button>
    </Container>
  )
}