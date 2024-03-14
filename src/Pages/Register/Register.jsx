import { Alert, Button, Snackbar, TextField } from "@mui/material"
import Background from "../Home/Background"
import { RegisterWrapper } from "./Register.styled"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [registerData, setRegisterData] = useState({
      name: '',
      surname: '',
      email: '',
      password: '',
      password2: ''
  });
   const [openSuccess, setOpenSuccess] = useState(false);
   const [openFailed, setOpenFailed] = useState(false);

  const handleClose = () => {
    setOpenSuccess(false);
    setOpenFailed(false);
  };

  const backHomeHandler = () => {
    const newPath = "/";
    navigate(newPath);
  };

  const validateForm = () => {
    let isValid = true;
    const newError = {};

    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    if(!registerData.name) {
      newError.name= 'Name is required';
      isValid = false;
    }

    if(!registerData.surname) {
      newError.surname = 'Surname is required';
      isValid = false;
    }

    if(!registerData.email) {
      newError.email = 'Email is required';
      isValid = false;
    }

    if(registerData.email && !emailRegex.test(registerData.email)) {
      newError.email = 'Wrong email format!!';
      isValid = false;
    }

    if(!registerData.password) {
      newError.password = 'Password is required';
      isValid = false;
    }

    if(registerData.password.length < 8) {
      newError.password = 'Password cannot be less than 8 characters.';
      isValid = false;
    }

    if(registerData.password.length > 15) {
      newError.password = 'Password cannot be mora than 15 characters.';
      isValid = false;
    }

    if(!registerData.password2) {
      newError.password2 = 'Password is required';
      isValid = false;
    }

    if(registerData.password2.length < 8) {
      newError.password2 = 'Password cannot be less than 8 characters.';
      isValid = false;
    } else if (registerData.password2.length > 15) {
      newError.password2 = 'Password cannot be more than 15 characters.';
      isValid = false;
    } else if (registerData.password !== registerData.password2) {
      newError.password2 = 'Passwords should match.';
      isValid = false;
    }

    setError(newError);
    return isValid;

  };

  const registerHandler = async () => {
    if(validateForm()) {
      fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(registerData)
      }).then((res) => {
        setOpenSuccess(true);
      }).catch((err) => {
        setOpenFailed(true);
      })
    }
  };

  console.log(error, 'error');
  
  const isFormValid = Object.keys(error).length === 0;

  return (
    <RegisterWrapper>
        <Background />
        <div className="register-container">
          <div className='header'>
                <Button
                    color="primary"
                    size='large'
                    onClick={backHomeHandler}
                > 
                    {<ArrowBackIosIcon />}
                </Button>
                <span>REGISTER</span>
          </div>
          <div className="input-part">
            <div className="name-inputs">
              <TextField 
                placeholder="Name" 
                onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                error={!!error.name}
                helperText={error.name}
              />
              <TextField 
                placeholder="Surname"
                onChange={(e) => setRegisterData({...registerData, surname: e.target.value})}
                error={!!error.surname}
                helperText={error.surname} 
              />
            </div>
            <TextField 
              placeholder="Email" 
              onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
              error={!!error.email}
              helperText={error.email} 
            />
            <TextField 
              type="password"
              onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
              placeholder="Password" 
              error={!!error.password}
              helperText={error.password} 
            /> 
            <TextField 
              type="password"
              onChange={(e) => setRegisterData({...registerData, password2: e.target.value})}
              placeholder="Confirm Password" 
              error={!!error.password2}
              helperText={error.password2} 
            />
          </div>
          <div className="button-container">
                <Button
                    color='primary'
                    className='register-button'
                    onClick={registerHandler}
                >
                    Register
                </Button>
          </div>
          <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                User Registered
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
        </div>
    </RegisterWrapper>
  )
}

export default Register