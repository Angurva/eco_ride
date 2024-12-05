import { Grid2 as Grid, Stack, Box, Avatar, Typography,Rating, Tooltip, Stepper,Step, StepLabel,  Card, Chip } from '@mui/material'
import { PiClockLight, PiClockCountdownLight, PiSeatbeltLight, PiClockCounterClockwiseThin, PiCoinsThin } from "react-icons/pi";
import React, { useState } from 'react'
import Link from 'next/link';

export default function CardViewSearch({result}) {

    const [carpooling, setCarpooling] = useState(result)
  
  return (
    <Card sx={{mb:2}}>
        <Link href={`/carpooling/${carpooling.id} `}>
        <Grid container spacing={1} sx={(carpooling.id%2) ? { bgcolor:"#d0e0e3"} : { bgcolor:"#eeeeee"} }>
            <Grid size={3} sx={{}}>
                <Stack justifyContent={'center'} alignItems='start' sx={{}}>
                    
                    <Box sx={{ display:'flex', gap:2, mx:2,my:1, alignItems:'center'}}>
                        <Avatar sx={{width:42,height:42}}>PN</Avatar>
                        <Box sx={{display:'flex',flexDirection:'column', alignItems:'start'}}>
                            <Typography sx={{fontSize:'0.9rem', mx:0.7}}>{carpooling.pseudo}</Typography>
                            <Tooltip title={carpooling.note} placement='right-end'>
                                <span>
                                    <Rating max={5} size='small' readOnly value={carpooling.note} precision={0.1}></Rating> 
                                </span>
                            </Tooltip>
                        </Box>
                    </Box>
                    
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',my:1,mx:2,gap:5}}>
                        <Chip label="ecologic" color={carpooling.ecology ? 'success' : 'grey' } size="small" sx={{ width:'auto',justifySelf:'end' }}></Chip>
                       <Box display={'flex'} alignItems={'center'}>
                         <Tooltip title="Nombre de place(s) restante(s)" placement="top">
                            <span>
                                <PiSeatbeltLight size={24}/> 
                            </span>
                        </Tooltip>
                        <Typography sx={{fontSize:'1.1rem'}}>: {carpooling.numberSeat}</Typography>
                       </Box>
                    </Box>
                </Stack>      
            </Grid>
            <Grid size={7} sx={{ pt:2 }}>
                <Box sx={{display:'flex', gap:1, justifyContent:'center'}}>
                    <Tooltip title="Duration">
                        <span>
                            <PiClockCounterClockwiseThin size={22}/>
                        </span>
                    </Tooltip>
                    <Typography sx={{ fontSize:'0.9rem'}}>45"</Typography>
                </Box>

                <Stepper sx={{mx:2}}>
                    <Step active>
                        <StepLabel icon={<PiClockLight size={22}/>}>{carpooling.departHour}</StepLabel>
                    </Step>

                    <Step active>
                        <StepLabel icon={<PiClockCountdownLight size={22}/>}>{carpooling.endHour}</StepLabel>
                    </Step>
                </Stepper>
            </Grid>
            <Grid size={2} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>    
                <Box sx={{display:'flex', alignItems:'center', mb:1}}>
                    <Typography sx={{mx:1,fontSize:'2.2rem'}}>{carpooling.price}</Typography>
                    <Tooltip title="crédit(s)" placement='bottom'>
                        <span>
                            <PiCoinsThin size={32}/> 
                        </span>
                    </Tooltip>
                </Box>
            </Grid>
        </Grid> 
        </Link>   
    </Card>
  )
}
