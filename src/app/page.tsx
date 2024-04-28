import Image from "next/image";
import styles from "./page.module.css";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Toys } from "@mui/icons-material";
import { HouseCard, SideMenu } from "@/components";

import GetHouse from "../utils/gethouse"

export default async function Home() {


  const data = await GetHouse("")

  const is_empty= ! Array.isArray(data) ||data.length <1 || !data


  return (
    <main>

      <Grid container spacing={2}>
        <Grid item md={11}>
        <Grid container spacing={1}>
          {
            !is_empty && data.map(item=> <Grid item md={4}>
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
