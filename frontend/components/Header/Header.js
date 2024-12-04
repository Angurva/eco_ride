import React from 'react';
//import styles from '@/app/styles/Header.module.css';
import { AppBar, Box, Container, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import Link from 'next/link';

const pages = [{
  id:1,
  path:'/',
  title:'Home',
},
{
  id:2,
  path:'/carpooling',
  title:'Carpooling',
},
{
  id:3,
  path:'/contact',
  title:'Contact',
},];
const auth_pages = [
  
  {
    id:4,
    path:'/login',
    title:'Sign in',
  },
  {
    id:5,
    path:'/register',
    title:'Register',
  },
]

export default function Header() {
  return (
   
      <AppBar sx={{
        height:70,
        bgcolor:'#0388A6',
        position:'sticky'
      }}>
        <Container maxWidth="lg">
          <Toolbar>         
            {/**Logo and brand */}
            <Box sx={{display:'flex', mr:4}}>
              <Link href="/">
                <Box sx={{display:'flex'}}>
                  <EmojiNatureIcon fontSize="large"/>
                  <Typography
                    sx={{
                      fontSize:'1.5rem'
                    }}>
                      Ecoride
                  </Typography>
                </Box>
              </Link>      
            </Box>
            {/**end logo and brand */}
            {/**Menu navigation pages */}
            <Box sx={{flexGrow:1,display:{xs:'none',md:'flex',mx:2}}}>
              {pages.map((page)=>
                (
                <Box key={page.id}>
                  <Typography sx={{color:'#fff', mx:1, fontSize:'1.2rem',}}>
                    <Link href={page.path}>{page.title}</Link></Typography>
                </Box>
              ))}
            </Box>
            {/**end menu navigation pages */}
            {/**menu authentification pages */}
            <Box sx={{display:{xs:'none',md:'flex'}}}>
              {auth_pages.map((auth_page)=>(
                <Box key={auth_page.id}>
                   <Typography sx={{color:'#fff', mx:2, fontSize:'1rem',}}>
                    <Link href={auth_page.path}>{auth_page.title}</Link></Typography>
                </Box>
                
              ))}
            </Box>    
          </Toolbar>
        </Container> 
      </AppBar>
     
  )
}
