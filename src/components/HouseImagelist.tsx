import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const HouseImagelist = ({itemData}:{itemData:string[]}) => {
  return (
    
  <ImageList sx={{ width:"auto" , height: 470}} cols={2} gap={8}>
    {itemData.map((item,index) => (
      <ImageListItem key={index}  rows={index == 0 ? 2 :1}>
        <img
          src={`${item}`}
          alt="alt"
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
  )
}

export default HouseImagelist