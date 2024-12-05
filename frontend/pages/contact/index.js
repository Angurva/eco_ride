import { Box, Button, Card,CardHeader, CardContent,Divider,TextField,CardActions, Grid2 as Grid  } from '@mui/material'
import React, { useState } from 'react'
import style from '../../styles/Login.module.css'
import Link from 'next/link'

export default function Contact() {

  const [formContact, setFormContact] = useState({
    firstname: '',
    lastname: '',
    email:'',
    object:'',
    description:'',
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormContact({...formContact,[name]:value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <Box sx={{
      display:'flex',
      flexGrow:1,
      justifyContent:'center',
      alignItems:'center'
    }}
    
    >
       <form onSubmit={handleSubmit} className={style.colorCard}>
        <Card sx={{
          width:'50rem',
          boxShadow:5
          }}
         
        >
          <CardHeader
            title="Ecoride"
            subheader="Nous contacter"
          />
          <Divider flexItem sx={{mx:2,}}/>
          <CardContent
            sx={{
              display:'flex',
              flexDirection:'column',
              width:'100%'
            }}
          >
           
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  size="small"
                  name="firstname"
                  label="Firstname"
                  value={formContact.firstname}
                  onChange={handleChange}
                  helperText="Enter your firstname"
                  sx={{
                    my:1,
                    mr:1,
                    width:'100%'
                  }}  
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  size="small"
                  name="lastname"
                  label="Lastname"
                  value={formContact.lastname}
                  onChange={handleChange}
                  helperText="Enter your lastname"
                  sx={{
                    my:1,
                    width:'100%',
                  }}  
                />
              </Grid>

            </Grid>
         
            
            <TextField
              required
              type="email"
              size="small"
              name="email"
              label="Email"
              value={formContact.email}
              onChange={handleChange}
              helperText="Enter your email"
              sx={{
                my:1,
              }}  
            />
            <TextField
              required
              size="small"
              name="object"
              label="Object"
              value={formContact.object}
              onChange={handleChange}
              sx={{
                my:1,
              }}  
            />
            <TextField
              required
              size="small"
              type="text"
              name="description"
              label="Description"
              rows={3}
              multiline
              value={formContact.description}
              onChange={handleChange}
              sx={{
                my:1,
              }}  
            />
          </CardContent>
          <CardActions 
            sx={{
              display:'flex',
              justifyContent:'space-between',
              mx:1,
              mb:2
            }}
          >      
            <Button variant="outlined">
              <Link href="/">Cancel</Link>
            </Button>
            <Button variant="outlined" type='submit'>
              Ok
            </Button>  
          </CardActions>
        </Card>
      </form>
    </Box>
  )
}
