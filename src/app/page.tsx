import Image from "next/image";
import styles from "./page.module.css";
import { Grid, Typography } from "@mui/material";
import { Toys } from "@mui/icons-material";

export default function Home() {
  return (
    <main>

      <Grid container spacing={1}>
        <Grid item md={10}>

          <Typography>Main section goes here </Typography>

        </Grid>

        <Grid item md={2}>
          <Typography> side bar </Typography>
        </Grid>

      </Grid>
      
    </main>
  );
}
