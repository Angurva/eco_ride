
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import style from '../styles/Login.module.css'

export default function Login() {

  const [account,setAccount] = useState({
    username:"",
    password:"",
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setAccount({...account, [name]: value});
  } 

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(JSON.stringify(account))
  }

  return (
    <Box 
      sx={{
        display:'flex',
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <form onSubmit={handleSubmit} className={style.colorCard}>  
        <Card sx={{
          width:'30rem',
          boxShadow:5,
          }}
        >
          <CardHeader
            title="Ecoride"
            subheader="Connection"
            sx={{}}
          />
          <Divider flexItem sx={{mx:2}}></Divider>
          <CardContent 
            sx={{
              display:'flex',
              flexDirection:'column'
            }}
          >
            <TextField
              required
              name="username"
              label="Username"
              value={account.username}
              onChange={handleChange}
              helperText="Enter your username"
              sx={{
                my:1,
              
              }}
            >

            </TextField>
            <TextField
              required
              type="password"
              name="password"
              label="Password"
              value={account.password}
              onChange={handleChange}
              helperText="Enter your password"
              sx={{
                my:1,
              }}
            >
            </TextField>
          </CardContent>
          <CardActions 
            sx={{
              display:'flex',
              justifyContent:'space-between',
              mx:1,
              mb:2
            }}
          >      
            <Button variant="outlined" color="primary">
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