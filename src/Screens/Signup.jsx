import { Avatar, Button, Container, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import Checkboxes from '../Components/Checkbox';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
 const [name , setName]=useState("");
 const [email , setEmail]=useState("");
 const [password,setPassword]=useState("");

 const handleSignup= async (e)=>{
    e.preventDefault();
   try{
      createUserWithEmailAndPassword(auth,email,password);
    
   }
   catch(error){

   } 
 };

  return (
    <form onSubmit={handleSignup}>
      <Container maxWidth="md">
        <Grid container justifyContent={'center'} sx={{mt:5 }}>
            <Grid item  xs={12} md={6} > 

                <Paper elevation={10}  sx={{ padding:"20px"}}>
                    <Grid align="center"> 
                        <Avatar sx={{ bgcolor: 'primary.main' }}><HowToRegIcon/></Avatar>
                    <Typography variant='h4' sx={{ fontFamily: 'Georgia, serif', fontSize: '24px',mb:3 }}>
                        SignUp
                    </Typography>
                    </Grid>
                    <TextField onChange={(e)=>setName(e.target.value)} label="Name" fullWidth sx={{mb:"18px" }} />
                    <TextField onChange={(e)=>setEmail(e.target.value)} label="Email" fullWidth sx={{mb:"18px" }} />
                    <TextField onChange={(e)=>setPassword(e.target.value)} label="Password" type="password" fullWidth sx={{mb:"18px"}} />
                    <TextField onChange={(e)=>setPassword(e.target.value)} label="Confirm Password" type="password" fullWidth sx={{mb:"5px"}} />
                    <Checkboxes checkline={"I accept all terms and condition"}/>
                    <Button variant="contained" type='submit' sx={{ width: '100%', height: '40px', borderRadius:"10px",mb:1, mt:2}}>Signup</Button>
                  
                    <Grid align='center'>
                    <Typography sx={{fontSize:14}}>Already have an account?
                        <Link sx={{fontWeight:"bold" , fontSize:15}} href="/"> Login</Link>
                    </Typography> 
                    </Grid>
                </Paper>
                 
            </Grid>
            

        </Grid>
    </Container>
    </form>
  )
}

export default Signup
