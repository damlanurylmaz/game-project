import { Alert, Button, InputAdornment, Snackbar, TextField } from '@mui/material';
import { LoginWrapper } from './Login.styled';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Header from '../../Components/Header';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
          email: '',
          password: ''
    });

   const [errors, setErrors] = useState({});
   const [openSuccess, setOpenSuccess] = useState(false);
   const [openFailed, setOpenFailed] = useState(false);

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
      if (loginRequest.data.length) {
        setOpenSuccess(true);
        localStorage.setItem('userId', loginRequest.data[0].id);
        navigate('/');
      } else {
        setOpenFailed(true);
      }
      return;
    }       
  };

  const handleClose = () => {
    setOpenSuccess(false);
    setOpenFailed(false);
  };

  const backHomeHandler = () => {
    const newPath = '/';
    navigate(newPath);
  };

  const isFormValid = Object.keys(errors).length === 0;
//   console.log(errors , 'errors');

  return (
    <LoginWrapper>
        <div className='header-container'>
          <Header />
        </div> 
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
        <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                Login Successful
              </Alert>
        </Snackbar>
        <Snackbar open={openFailed} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
              >
                Try again!
              </Alert>
        </Snackbar>
    </LoginWrapper>
  )
}

export default Login