import Image from "next/image";
import styles from "./page.module.css";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Toys } from "@mui/icons-material";
import { HouseCard, SideMenu } from "@/components";

import {GetHouse} from "../utils/gethouse"
import SecondaryFilter from "@/components/SecondaryFilter";

export default async function Home({searchParams}:any) {


  console.log(searchParams)
  const data = await GetHouse(searchParams.category)

  const is_empty= ! Array.isArray(data) ||data.length <1 || !data


  return (
    <main>

      <Grid container spacing={2}>
        <Grid item md={11}>

        <SecondaryFilter/>

        <Grid container spacing={1}>
          {
            !is_empty && data.map((item,index)=> <Grid key={index} item md={4}>
               <HouseCard Data={item}/>
            </Grid>)
          }
        </Grid>
        </Grid>

        <Grid item md={1}>
          <SideMenu/>
          
        </Grid>

      </Grid>
      
    </main>
  );
}
