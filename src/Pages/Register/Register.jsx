import { Button, TextField } from "@mui/material"
import Background from "../Home/Background"
import { RegisterWrapper } from "./Register.styled"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router";
import { useState } from "react";

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

  const backHomeHandler = () => {
    const newPath = "/";
    navigate(newPath);
  };

  const registerHandler = () => {

  };

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
              />
              <TextField 
                placeholder="Surname" 
              />
            </div>
            <TextField 
              placeholder="Email" 
            />
            <TextField 
              type="password"
              placeholder="Password" 
            /> 
            <TextField 
              type="password"
              placeholder="Enter your password again." 
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
        </div>
    </RegisterWrapper>
  )
}

export default Register