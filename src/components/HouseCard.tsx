import { HouseListType } from '@/types'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from './styles.module.scss'
import Link from 'next/link'

const HouseCard = ({Data}:{Data:HouseListType}) => {


    const {id,img,title,description,price_per_night}=Data

    console.log(title)

  return (
    <>
    <Box className={styles.box}   >
        
      <Image width={405}
        height={250} 
        className={styles.img} 
        alt ="image "src={`${img}`}/> 
      
        <Link href={`/house/${id}`} >
            <Typography 
            className={styles.link} 
            variant='subtitle1'
            fontWeight="bold"> 
            {title}
            </Typography>
        </Link>
          
        <Typography variant="body2"
        textAlign="justify" pt={1}> 
        {description}</Typography>
        <Typography fontWeight="bold">{price_per_night} ETB</Typography>
        
    </Box>
    
    </>
  )
}

export default HouseCard