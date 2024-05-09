import { DensityMedium } from '@mui/icons-material'
import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import PrimarySearch from './PrimarySearch'
import UserButton from './UserButton'

export const Header = () => {
  return (
    <>
    <AppBar position='relative' className={styles.appbar}>
      <Toolbar>
        <Stack width="100%" justifyContent="space-between" alignItems={"center"} flexDirection={"row"}>

         <UserButton/>

          <Box>
            <PrimarySearch/>
          </Box>


          <Stack flexDirection="row" alignItems="center">
            <Image alt="logo" width={40} height={50} src="/logo/HabitantHub.svg"/>
            <Typography
              pl={1}    
              className={styles.logo}
              variant="button"
              
              textTransform="uppercase" >
                Habitant hub
            </Typography>
          </Stack>

        
          
        </Stack>
      </Toolbar>

    </AppBar>
    </>
  )
}
