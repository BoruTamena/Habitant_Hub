import { Box, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { HouseCategories } from '../../constant'

import styles from './styles.module.scss'
import { House } from '@mui/icons-material'

const SideMenu = () => {
  return (
    <>
  

        <List className={styles.sidmenu} sx={{bgcolor:"primary.main"}}>

            {
           HouseCategories.map((item,index)=><ListItem key={item.id}>
                    <ListItemText sx={{textAlign:"center"}}>
                        <Box>
                        {item.icon && item.icon}  

                        </Box>
                     <Typography variant="caption">{item.category}</Typography>
                    </ListItemText>
                </ListItem>)
            }

        </List>

        
   
    
    </>
  )
}

export default SideMenu