
import { Box, Card, CardContent, CardHeader,CardActions, Divider, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link'
import style from '../styles/Login.module.css'


/** register page: function to create a new account  */
export default function Register() {

  /**object to store data enter 'input'*/ 
  const [accountRegister, setAccountRegister] = useState({
    username:"",
    email:"",
    password:"",
    confirm_password:"",
  }) 
  const [errorPwd,setErrorPwd] = useState()

  /**function to store each input */
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setAccountRegister({...accountRegister,[name]:value});
  }

  /**function to send data to api server*/
  const handleSubmit = () => {
    e.preventDefault();
    //code to send POST data json to server api
    //.....
    if(accountRegister.password !== accountRegister.confirm_password)
    {

    }else{
      console.log(JSON.stringify(accountRegister))   
    }
   
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
          width:'30rem',
          boxShadow:5
          }}
         
        >
          <CardHeader
            title="Ecoride"
            subheader="Register"
          />
          <Divider flexItem sx={{mx:2,}}/>
          <CardContent
            sx={{
              display:'flex',
              flexDirection:'column'
            }}
          >
            <TextField
              required
              size="small"
              name="username"
              label="Username"
              value={accountRegister.username}
              onChange={handleChange}
              helperText="Enter your username"
              sx={{
                my:1,
              }}  
            />
            <TextField
              required
              type="email"
              size="small"
              name="email"
              label="Email"
              value={accountRegister.email}
              onChange={handleChange}
              helperText="Enter your email"
              sx={{
                my:1,
              }}  
            />
            <TextField
              required
              size="small"
              type="password"
              name="password"
              label="Password"
              value={accountRegister.password}
              onChange={handleChange}
              helperText="Enter your password"
              sx={{
                my:1,
              }}  
            />
            <TextField
              required
              type="password"
              size="small"
              name="confirm_password"
              label="Confirm password"
              value={accountRegister.confirm_password}
              onChange={handleChange}
              helperText="Enter your confirm password"
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