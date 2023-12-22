import { Button, Card, CardContent, CardHeader, CardMedia, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";
import { PersonAdd, Visibility, VisibilityOff } from "@mui/icons-material";


export default function Signin() {
  const [showPassword,setShowPassword]=useState(false)
  const [showConfirmPassword,setShowConfirmPassword]=useState(false)

  const handleTogglePasswordVisibility=()=>{
    setShowPassword(!showPassword)
  }
  const handleToggleConfirmPasswordVisibility=()=>{
    setShowConfirmPassword(!showConfirmPassword)
  }


  const schema =yup.object().shape({
    Password:yup.string().min(4).max(20),
    ConfirmPassword:yup.string().oneOf([yup.ref("Password")],"not match")
  })

  const {register,handleSubmit,formState:{errors}}=useForm(
    {
      resolver:yupResolver(schema)
    }
  )
  
  const onSubmit=(data)=>{
    console.log(data)
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} >
     <Stack spacing={5}>
      <Card  sx={{boxShadow:22 } } >
      <CardMedia>
        <PersonAdd />
      </CardMedia>
        <CardHeader 
        title="Signin here"
        />
            
        <CardContent>
          <Stack spacing={2}>
        <TextField
        {...register("Email")}
        variant="outlined" label="Email"  fullWidth type='email' required  />
        <TextField 
        {...register("Password")}  error={errors.Password}  helperText={errors.Password ?"minimun 4 leters":""}
        type={showPassword?"text":"password"}
        InputProps={{
          endAdornment:(
            <InputAdornment>
            <IconButton onClick={handleTogglePasswordVisibility}>
              {showPassword?<VisibilityOff/>:<Visibility />}
            </IconButton>
            </InputAdornment>
          )
        }}
        variant="outlined" label="Password"   fullWidth  required/>
        <TextField 
        {...register("ConfirmPassword")}  error={errors.ConfirmPassword}   helperText={errors.ConfirmPassword?.message}
        type={showConfirmPassword?"text":"password"}
        InputProps={{
          endAdornment:(
            <InputAdornment>
            <IconButton onClick={handleToggleConfirmPasswordVisibility}>
              {showConfirmPassword?<VisibilityOff />:<Visibility />}
            </IconButton>
            </InputAdornment>
          )
        }}
        variant="outlined" label="Confirm Password"  fullWidth  required/>
        </Stack>
        </CardContent>
          <Button sx={{marginLeft:26}}  
          variant="contained" 
          size='small'
          type="submit"
          >Submit</Button>
       

        </Card>
        <Card elevation={1} ou>
          <Typography variant='subtitle1' sx={{marginLeft:7}}>have account? <span><Link to="/next-app/">Login</Link> </span> </Typography>
        </Card>
        </Stack>
        </form>
    </>
  )
}
