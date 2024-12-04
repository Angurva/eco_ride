import { Box, Container, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <Box sx={{ 
      bgcolor:'#f9f9f9',
      bottom:0,
      width:'100%',
      justifySelf:'end'
    }}>
      <Container maxWidth="lg" sx={{
        height:70,
        display:'flex',
        alignItems:'center',
      }}>
          
            <Box sx={{
              flexGrow:1,
              display:'flex',
            }}>
              <Typography 
                sx={{
                  textDecorationLine:'underline',
                  mr:2,
                  color:'#5f5f5f'
                }}>
                  <Link href="/mentions-legales">Informations légales</Link>
              </Typography>
              <Typography 
                sx={{
                  textDecorationLine:'underline',
                  mr:2,
                  color:'#5f5f5f'
                }}>
                  <Link href="mailto:ecoride@ecoride.fr">Nous écrire</Link>
              </Typography>

            </Box>
            <Box sx={{
              display:'flex',
             
            }}>
              <Typography 
                sx={{ 
                  mt:0.5,
                  mb:1,
                  fontStyle:'italic',
                  color:'#9f9f9f',
                  fontSize:'0.8rem',
                  fontWeight:300
                }}> 
                  Ecoride 2024 &copy; | Lehanann.</Typography>
            </Box>
            
      </Container>
     
    </Box>
  )
}
