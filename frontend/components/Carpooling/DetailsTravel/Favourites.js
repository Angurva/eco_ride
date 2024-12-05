import React from 'react';
import { Box, Stack, Typography, Tooltip} from '@mui/material'
import { PiSeatbeltThin } from "react-icons/pi";


export default function Favourites({carpooling}) {
  return (
    <Stack spacing={3}>
    
        <Box sx={{display:'flex', justifyContent:'end', alignItems:'center'}}> 
            <Typography sx={{ml:2,mr:0.6,fontSize:'2rem', color:'gray'}}>2</Typography>   
            <Tooltip title='Nombre de place(s) restante(s)' placement='bottom'>
                <span>
                    <PiSeatbeltThin size={32}/>
                </span>
            </Tooltip>
           
        </Box>
        
    </Stack>
  )
}
