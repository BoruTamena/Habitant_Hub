

import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/themes";
import { Box, Container, CssBaseline, Grid, Stack, Typography } from "@mui/material";
import { CopyAll, Copyright } from "@mui/icons-material";


export const metadata: Metadata = {
  title: "Habitant-Hub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
     
        <body >
          <Box sx={{margin:"10px"}}>
            <Header/>
            {children}
          </Box>

          <Box bgcolor={"secondary.light"} mt={5} sx={{position:"relative",bottom:"0px",width:"100%",height:"100%"}}>
           
           <Footer/>

          </Box>
      
        </body>
        

      </ThemeProvider>
   
    
    </html>
  );
}
