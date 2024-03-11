import { Button, InputAdornment, TextField } from '@mui/material';
import Background from '../Home/Background';
import { LoginWrapper } from './Login.styled';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
   const [loginData, setLoginData] = useState({
        email: '',
        password: ''
   });

   const [errors, setErrors] = useState({});

   const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } 

    if (!loginData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const loginHandler = async (e) => {
    if (validateForm()) {
      const loginRequest = await axios.get(`http://localhost:3000/users?email=${loginData.email}&password=${loginData.password}`)
      if(loginRequest.data.length > 0) {
        const newPath = '/game';
        navigate(newPath);
        alert('Login Successfuly');
      } else {
        alert('Try again');
      }
    }       
  };

  const backHomeHandler = () => {
    const newPath = '/home';
    navigate(newPath);
  };

  const isFormValid = Object.keys(errors).length === 0;
//   console.log(errors , 'errors');

  return (
    <LoginWrapper>
        <Background />
        <div className='login-container'>
            <div className='header'>
                <Button
                    color="primary"
                    size='large'
                    onClick={backHomeHandler}
                > 
                    {<ArrowBackIosIcon />}
                </Button>
                <span>LOGIN</span>
            </div>
            <div className='input-container'>
                <TextField 
                    placeholder='Email'
                    className='input' 
                    type='text' 
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon />
                          </InputAdornment>
                        ),
                    }}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField 
                    placeholder='Password'
                    className='input' 
                    type='password' 
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon />
                          </InputAdornment>
                        ),
                    }}
                    error={!!errors.password}
                    helperText={errors.password}
                />
            </div>
            <div className='button-container'>
                <Button
                    color='primary'
                    className='login-button'
                    onClick={loginHandler}
                >
                    Login
                </Button>
            </div>
        </div>
    </LoginWrapper>
  )
}

export default Login