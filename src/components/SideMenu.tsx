

import { Box, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { HouseCategories } from '../../constant'

import styles from './styles.module.scss'
import { House } from '@mui/icons-material'
import Link from 'next/link'

const SideMenu = () => {
  return (
    <Box sx={{overflow:"scroll",height:"100%"}} mt={1}>
        <List className={styles.sidmenu} sx={{bgcolor:"primary.main"}}>

            {
           HouseCategories.map((item,index)=><ListItem key={item.id}>
                    <ListItemText  sx={{textAlign:"center"}}>
                        <Box sx={{fontSize:"25px",fontWeight:"bold"}}>{item.icon && item.icon} </Box>  
                        <Typography 
                           
                            sx={{textAlign:"center"}} 
                            variant="caption">
                            {item.category}

                         </Typography>
                    </ListItemText>
                </ListItem>)
            }

        </List>

        
   
    
    </Box>
  )
}

export default SideMenu