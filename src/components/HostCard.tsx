import React from 'react'
import {Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography} from '@mui/material'
import { hostdetail } from '@/types'
import { CastForEducation, Language, LocationCity, Map } from '@mui/icons-material'
import Image from 'next/image'

const HostCard = ({Data}:{Data:hostdetail}) => {

  const {description,name,language,education,location}=Data



  return (
  
   <Box sx={{bgcolor:"primary.main"}}p={1} mt={1}>

    <Typography variant='h5'  textAlign="center" fontWeight="bold"> Meet Your Host </Typography>
    <Container>
     <Image src="/image/h1.jpeg" alt="host image " width={200} height={200} />
      
      <Typography  variant="h5" textAlign="center" fontWeight="bold"> {name}</Typography>

      <List dense>
        <ListItemText>
          <ListItemIcon >
            <Language/>
          </ListItemIcon>
          {language.join(" , ")}
          </ListItemText>
        <ListItemText>
           <ListItemIcon>
              <CastForEducation/>
            </ListItemIcon>
          {education}
          </ListItemText>

          <ListItemText>
           <ListItemIcon>
             <Map/>
            </ListItemIcon>
          {location}
          </ListItemText>
      </List>
    </Container>


  <Typography textAlign="justify">{description}</Typography>


   </Box>
  )
}

export default HostCard