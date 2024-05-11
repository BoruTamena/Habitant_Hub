"use client"

import { Copyright } from "@mui/icons-material";
import { Container ,Grid ,Typography,Stack} from "@mui/material";

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
        name:"",
        url:""
    },

    {
        id:2,
        name:"",
        url:""
    },
    {
        id:3,
        name:"",
        url:""
    }
]



  return (
   <>
<Container >

<Grid container spacing={2}>

  <Grid item md={4}>

    <Typography fontWeight={"bold"}> Company</Typography>
    {
        Company.map((item,index)=><Typography textTransform={"capitalize"} p={1}>{item.name}</Typography>)
    }
    

    
  </Grid>

  <Grid item md={4}>

  <Typography fontWeight={"bold"}>Contact</Typography>


  </Grid>

  <Grid item md={4}>

    <Typography fontWeight={"bold"}>Explore</Typography>


    </Grid>

</Grid>
 
<Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
  <Copyright/>
  <Typography p={1} textAlign={"center"}> 2024 all right  reserved</Typography>
</Stack>
  
</Container>
   </>
  )
};

export default Footer;