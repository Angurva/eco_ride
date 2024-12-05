
import { Box, Switch, Slider, Typography, Rating, } from '@mui/material'

import React, { useState } from 'react'

export default function Filters() {

    const [note,setNote] = useState(0)
    const handleClick = (e)=>{
        setNote(e.target.value)
    }
  return (
    <Box sx={{border:1}}>
        <Typography variant="h5" sx={{ m:2, }}>
            Filtres
        </Typography>    
            <Box sx={{ display:'flex', alignItems:'center',ml:2}}>
                <Typography>Ecologic travel</Typography>
                <Switch
                color="success"
                >
                </Switch>
            </Box>
            <Box sx={{ display:'flex', justifyContent:'start',ml:2}}>
                <Typography>
                    Price:
                </Typography>
                <Box width={150}>
                    <Slider
                        defaultValue={3}
                        step={1}
                        marks={[{value:1, label:'1'},{value:2, label:'2'},{value:10, label:'10'}]}
                        min={1}
                        max={10}
                        valueLabelDisplay="auto"
                        size='small'
                        label='Price'
                    />
                </Box>
            </Box>
            <Box sx={{ml:2,}}>
                <Typography>Durée du voyage <input type="number" max={600} min={0} step={1}></input> min</Typography>
            </Box>
            

            <Box sx={{
                mx:2,
                display:'flex',

                }}
            >
                <Typography>Note:</Typography>
                <Rating max={5} value={note} precision={0.1} onClick={handleClick}></Rating>
                <input type="number" step={0.1} max={5} min={0}></input>
                
            </Box>
            
        

       

    </Box>
    )
}
