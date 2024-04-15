import Header from '../../Components/Header'
import vesikalik from '../../assets/pngs/vesikalik.jpg'
import { Button, MenuItem, Select, TextField } from '@mui/material'
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
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    surname: '',
    gender: '',
    bornDate: null,
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    // setGender(e.target.value);
    console.log(e.target.value);
    setProfileInfo({...profileInfo, gender: e.target.value});
  };

  const dateHandler = (newValue) => {
    setProfileInfo({...profileInfo, bornDate: newValue});
  };

  const updateInformation = async () => {
    console.log(profileInfo);
    const updatedData = {...profileInfo, bornDate: new Date(profileInfo.bornDate)};
    console.log(updatedData, 'update')
    try {
        await axios.put(`http://localhost:3000/users/${userId}`, updatedData);
        console.log("Profile information updated successfully!");
    } catch (error) {
        console.error("Error updating profile information:", error);
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
                        />
                        <TextField
                            id="outlined-helperText"
                            value={profileInfo.password}
                            type='password'
                            onChange={(e) => (setProfileInfo({...profileInfo, password: e.target.value}))}
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
    </ProfileWrapper>
  )
}

export default Profile