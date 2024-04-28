import Image from "next/image";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import { Toys } from "@mui/icons-material";
import { SideMenu } from "@/components";

export default function Home() {
  return (
    <main>

      <Grid container spacing={2}>
        <Grid item md={11}>

          <Typography>Main section goes here </Typography>

        </Grid>

        <Grid item md={1}>
          <SideMenu/>
          
        </Grid>

      </Grid>
      
    </main>
  );
}
