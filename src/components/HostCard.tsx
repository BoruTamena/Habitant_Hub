import React from 'react'
import {Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material'
import { hostdetail } from '@/types'
import { CastForEducation, Language, LocationCity, Map } from '@mui/icons-material'
import Image from 'next/image'

const HostCard = ({Data}:{Data:hostdetail}) => {

  const {description,name,language,education,location}=Data



  return (
  
   <Box sx={{bgcolor:"primary.main",textAlign:"center"}}p={1} mt={2}>

    <Typography variant='h5'  textAlign="center" fontWeight="bold" pb={1}> Meet Your Host </Typography>
    
    <Container>
      <Image src="/image/person1.jpeg" 
        alt="host image " 
        width={250} 
        height={200} 
        style={{borderRadius:10}} 
        
        />
      
           <Typography  variant="h5" textAlign="center" fontWeight="bold" pt={1}> {name}</Typography>

      <List dense>
      <ListItem>
        <ListItemIcon >
            <Language/>
        </ListItemIcon>
        <ListItemText>{language.join(" , ")}</ListItemText>
        </ListItem>
        
        <ListItem>
           <ListItemIcon>
              <CastForEducation/>
            </ListItemIcon>
          <ListItemText>{education} </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
              <Map/>
           </ListItemIcon>
           <ListItemText>{location} </ListItemText>
        </ListItem>
          
      </List>
    </Container>


  <Typography textAlign="justify">{description}</Typography>


   </Box>
  )
}

export default HostCard