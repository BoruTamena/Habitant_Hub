import { Drawer, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { HouseCategories } from '../../constant'

const SideMenu = () => {
  return (
    <>
    <Drawer open={true } anchor="right">

        <List>

            {
           HouseCategories.map((item,index)=><ListItem key={item.id}>
                    <ListItemText>{item.category}</ListItemText>
                </ListItem>)
            }

        </List>

        
    </Drawer>
    
    </>
  )
}

export default SideMenu