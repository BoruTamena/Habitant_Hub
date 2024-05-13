
'use client';
import { createTheme } from "@mui/material";
import {Poppins } from 'next/font/google';


const poppins =Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  })

export const theme=createTheme({

    typography: {
        fontFamily: poppins.style.fontFamily,
      },

    palette:{
        primary:{
           
            main:"#CAF5FF"

        },
        secondary:{
            main:"#F5DEDE",
           
        },
        
    
    },

    components:{
        MuiPopover:{
            styleOverrides:{
                root:{
                    
                }
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    backgroundColor:"primary",
                    
                }
            }
        }
    }
  
    
})