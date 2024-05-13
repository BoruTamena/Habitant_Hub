"use client"

import { Copyright } from "@mui/icons-material";
import { Container ,Grid ,Typography,Stack, Box, Chip} from "@mui/material";
import Image from "next/image";
import { HouseCategories } from "../../constant";

type Props = {}

const Footer = (props: Props) => {

    const Company=[
        {
            id:1,
            name:"about",
            url:""
        },
        {
            id:2,
            name:"list propery",
            url:""
        } ,
        {
            id:3,
            name:"term & policy",
            url:""
        }
    ]
const Contact=[
    {
        id:1,
        name:"Facebook",
        url:""
    },

    {
        id:2,
        name:"twitter",
        url:""
    },
    {
        id:3,
        name:"Telegram",
        url:""
    }
    ,
    {
        id:4,
        name:"Instagram",
        url:""
    }
]



  return (
   <Box p={1}>

<br/>
<Stack direction={"row"} spacing={2} alignItems={"center"} sx={{marginTop:"10px"}}>

    <Image alt="logo" 
      width={40}
      height={50} 
      src="/logo/HabitantHub.svg"
      style={{cursor:"pointer"}}
    />
    <Typography variant="h6" > Habitant Hub</Typography>

   </Stack>

<Grid container spacing={2} mt={2}>


  <Grid item md={4}>


    <Typography fontWeight={"bold"}> Company</Typography>
    {
        Company.map((item,index)=><Typography key={index} variant="body2" textTransform={"capitalize"} p={1}>{item.name}</Typography>)
    }
    

    
  </Grid>

  <Grid item md={4}>

  <Typography fontWeight={"bold"}>Contact</Typography>
  {
        Contact.map((item,index)=><Typography key={index} variant="body2" textTransform={"capitalize"} p={1}>{item.name}</Typography>)
  }

  </Grid>

  <Grid item md={4}>

    <Typography fontWeight={"bold"}>Explore</Typography>

    <Stack direction={"row"} spacing={1} useFlexGap flexWrap={"wrap"} alignItems={"center"} >

        {
            HouseCategories.map((item,index)=><Chip key={index} label={item.category}/>)
        }

    </Stack>

    </Grid>

</Grid>
 
<Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
  <Copyright/>
  <Typography p={1} textAlign={"center"}> 2024 all right  reserved</Typography>
</Stack>
  

   </Box>
  )
};

export default Footer;