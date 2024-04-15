import Header from '../../Components/Header'
import vesikalik from '../../assets/pngs/vesikalik.jpg'
import { Alert, Button, MenuItem, Select, Snackbar, TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { ProfileWrapper } from './Profile.styled';
import dayjs from 'dayjs';

const Profile = () => {
  const userId = localStorage.getItem('userId');
  const [error, setError] = useState({});
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    surname: '',
    gender: '',
    bornDate: null,
    email: '',
    password: ''
  });
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailed, setOpenFailed] = useState(false);
  
  const handleClose = () => {
    setOpenSuccess(false);
    setOpenFailed(false);
  };

  const validateForm = () =>{
    let isValid = true;
    const newError = {};
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    if(!emailRegex.test(profileInfo.email)) {
        newError.email = 'Wrong email format!!';
        isValid = false;
    }

    if(profileInfo.password.length < 8) {
        newError.password = 'Password cannot be less than 8 characters.';
        isValid = false;
    }
  
    if(profileInfo.password.length > 15) {
    newError.password = 'Password cannot be more than 15 characters.';
    isValid = false;
    }

    setError(newError);
    return isValid;

  };

  const handleChange = (e) => {
    // setGender(e.target.value);
    console.log(e.target.value);
    setProfileInfo({...profileInfo, gender: e.target.value});
  };

  const dateHandler = (newValue) => {
    setProfileInfo({...profileInfo, bornDate: newValue});
  };

  const updateInformation = async () => {
    if(validateForm()) {
        const updatedData = {...profileInfo, bornDate: new Date(profileInfo.bornDate)};
        console.log(updatedData, 'update')
        try {
            await axios.put(`http://localhost:3000/users/${userId}`, updatedData);
            console.log("Profile information updated successfully!");
        } catch (error) {
            console.error("Error updating profile information:", error);
        }
    }
  };

  console.log(profileInfo, 'profile')

  useEffect(() => {
    const getProfileInfo = async () => {
        const profileReq = await axios.get(`http://localhost:3000/users/${userId}`);
        console.log(profileReq);
        setProfileInfo(profileReq.data);
    };
    getProfileInfo();
  },[]);

  return (
    <ProfileWrapper>
        <div className='header'>
            <Header />
        </div>
        <div className='profile-container'>
            <div className='profile-form'>
                <div className='form-top-part'>
                    <div className='profile-image'>
                        <img className='image' src={vesikalik} alt='Profile Image'/>
                    </div>
                    <h1>Profile Information</h1>
                </div>
                <div className='form-changeable-part'>
                    <div className='changeable-input-container'>
                        <TextField
                            id="outlined-read-only-input"
                            value={profileInfo.name}
                            disabled
                        />
                        <TextField
                            id="outlined-read-only-input"
                            value={profileInfo.surname}
                            disabled
                        />
                    </div>
                    <div className='changeable-input-container'>
                        <Select
                            label="Gender"
                            value={profileInfo.gender}
                            onChange={handleChange}
                        >
                            <MenuItem value={'Female'}>Female</MenuItem>
                            <MenuItem value={'Male'}>Male</MenuItem>
                        </Select>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker 
                                    value={dayjs(profileInfo.bornDate)}
                                    onChange={dateHandler}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='changeable-input-container'>
                        <TextField
                            id="outlined-helperText"
                            value={profileInfo.email}
                            onChange={(e) => (setProfileInfo({...profileInfo, email: e.target.value}))}
                            error={!!error.email}
                            helperText={error.email} 
                        />
                        <TextField
                            id="outlined-helperText"
                            value={profileInfo.password}
                            type='password'
                            onChange={(e) => (setProfileInfo({...profileInfo, password: e.target.value}))}
                            error={!!error.password}
                            helperText={error.password} 
                        />
                    </div>  
                </div>
                <div className='update-button-container'>
                    <Button
                        onClick={updateInformation}
                    >
                        Update
                    </Button>        
                </div>
            </div>
        </div>
        <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
              >
                User Information Updated!
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
    </ProfileWrapper>
  )
}

export default Profile