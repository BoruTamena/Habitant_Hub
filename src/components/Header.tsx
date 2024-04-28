import { DensityMedium } from '@mui/icons-material'
import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import PrimarySearch from './PrimarySearch'

export const Header = () => {
  return (
    <>
    <AppBar position='relative' className={styles.appbar}>
      <Toolbar>
        <Stack width="100%" justifyContent="space-between" alignItems={"center"} flexDirection={"row"}>

          <Box sx={{bgcolor:"secondary.main",borderRadius:10}}>
              <Stack alignItems="center" flexDirection="row">

                <Box >
                  <Avatar alt="user" src="/image/h1.jpeg" />
                </Box>
                <Box pl={1}>
                   <Typography>Boru </Typography>
                </Box>

                <IconButton>
                  <DensityMedium/>
                </IconButton>

              </Stack>
          </Box>

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
