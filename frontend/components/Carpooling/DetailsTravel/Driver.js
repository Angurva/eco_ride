import React from 'react';
import { Box, Card, CardContent, Avatar, Typography,Stack, Rating, Divider, Button, Tooltip } from '@mui/material';
import { PiGasPumpThin, PiCarProfileThin, PiCertificateThin } from "react-icons/pi";
import Link from 'next/link';

export default function Driver({carpooling}) {
  return (
    <Card sx={{borderRadius:2, bgcolor:"#fafafa"}}>
        <CardContent>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                <Avatar sx={{ width:48, height:48, mx:3, bgcolor:'#f1a89c' }}>TP</Avatar>
                <Stack sx={{flexGrow:1}}>
                    <Typography sx={{fontSize:'1rem'}}>{carpooling.pseudo}</Typography>
                    <Box sx={{display:'flex'}}>
                        <Rating max={1} size={'small'} readOnly value={carpooling.note} precision={0.1} ></Rating>
                        <Typography sx={{fontSize:'0.8rem'}}>&nbsp;{carpooling.note}&nbsp;/&nbsp;5</Typography>
                    </Box>
                </Stack> 
                <Button variant='outlined'>15 avis</Button>
                
            </Box>
            <Divider flexItem sx={{my:2,}} />
            <Box sx={{ display:'flex', }}>
                <Stack>
                    <Box sx={{ display:'flex',alignItems:'center', my:2, ml:5 }}>
                        <PiCarProfileThin size={24}/>
                        <Typography sx={{ mx:2, fontSize:'0.9rem' }}>Renault, Zoé</Typography>
                    </Box>
                    <Box sx={{ display:'flex',alignItems:'center', ml:5 }}>
                        <PiGasPumpThin size={24}/>
                        <Typography sx={{ mx:2, fontSize:'0.9rem' }}>Electrique</Typography>
                    </Box>
                </Stack>
                {/*<Box sx={{ display: 'flex', ml:'auto', alignItems:'center', color:'success.main'}} >
                    <Tooltip title="Voyage écologique">
                        <span>
                            <PiCertificateThin size={64} />
                        </span>
                    </Tooltip>
                    
                </Box>*/}
                
            </Box>
            
            
        </CardContent>
    </Card>
  )
}
