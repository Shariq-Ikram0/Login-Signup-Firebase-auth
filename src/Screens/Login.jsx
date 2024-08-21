import { Avatar, Button, Container, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import Checkboxes from '../Components/Checkbox';

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
  return (
    <Container maxWidth="md">
        <Grid container justifyContent={'center'} sx={{mt:5 }}>
            <Grid item  xs={12} md={6} > 

                <Paper elevation={10}  sx={{ padding:"20px"}}>
                    <Grid align="center"> 
                        <Avatar sx={{ bgcolor: 'primary.main' }}><LoginIcon/></Avatar>
                    <Typography variant='h4' sx={{ fontFamily: 'Georgia, serif', fontSize: '24px',mb:3 }}>
                        Login
                    </Typography>
                    </Grid>

                    <TextField onChange={(e)=>{setEmail(e.target.value)}} value={email} label="Email" fullWidth sx={{mb:"18px" }} />
                    
                    <TextField onChange={(e)=>{setPassword(e.target.value)}} value={password} label="Password" type="password" fullWidth sx={{mb:"5px"}} />

                    <Checkboxes checkline={"Remember me"} />
                    <Button variant="contained" type='submit' sx={{ width: '100%', height: '40px', borderRadius:"10px",mb:1, mt:2}}>Login</Button>
                    <Typography sx={{fontSize:14,mb:2}}>
                        <Link href="#">forget password</Link>
                    </Typography>
                    <Grid align='center'>
                    <Typography sx={{fontSize:14}}>Don't have an account?
                        <Link sx={{fontWeight:"bold" , fontSize:15}} href="/signup"> SignUp</Link>
                    </Typography> 
                    </Grid>
                </Paper>
                 
            </Grid>
            

        </Grid>
    </Container>
  )
}

export default Login


