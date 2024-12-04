import { Box, Card, CardContent, CardMedia, Grid2 as Grid, Typography } from '@mui/material';
import React from 'react';

export default function CardHome({content}) {
  return (
    content.id % 2 //condition pour orienter l'image soit a droite soit à gauche avec un modulo sur l'id
    ? // si le modulo est vrai alors on oriente l'image à droite
    <Card sx={{ my:8, display:'flex' }}>
        <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center', flexGrow:1}}>
            <Typography variant='h5' sx={{ }}>{content.title}</Typography>
            <Typography variant='subtitle1' sx={{ }}>{content.subtitle}</Typography>
            <Typography variant="body1">{content.description}</Typography>
        </CardContent> 
        <CardMedia
            component="img"
            sx={{ width:400 }}
            image={content.pathPicture}
        />  
    </Card>
    : //sinon l'image est à gauche
    <Card sx={{ my:8, display:'flex' }}>
        <CardMedia
            component="img"
            sx={{ width:400 }}
            image={content.pathPicture}
        />
        <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center', flexGrow:1}}>
            <Typography variant='h5' sx={{ }}>{content.title}</Typography>
            <Typography variant='subtitle1' sx={{ }}>{content.subtitle}</Typography>
            <Typography variant="body1">{content.description}</Typography>
        </CardContent> 
    </Card>
    

    
  )
}