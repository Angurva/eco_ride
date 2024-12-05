import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Box } from '@mui/material';


export default function Layout({children}) {
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header />
        {children}
        <Footer />
    </Box>
  )
}
