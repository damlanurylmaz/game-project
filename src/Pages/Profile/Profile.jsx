import Header from '../../Components/Header'
import { ProfileWrapper } from './Profile.styled'
import vesikalik from '../../assets/pngs/vesikalik.jpg'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react'
import axios from 'axios';

const Profile = () => {
  const [gender, setGender] = useState('');
  const userId = localStorage.getItem('userId');
  const [profileInfo, setProfileInfo] = useState({});

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  useEffect(() => {
    const getProfileInfo = async () => {
        const profileReq = await axios.get(`http://localhost:3000/users/${userId}`);
        console.log(profileReq);
        setProfileInfo(profileReq.data);
    };
    getProfileInfo();
  },[]);

  console.log(profileInfo)

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
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Gender"
                            value={gender}
                            onChange={handleChange}
                        >
                            <MenuItem value={'Female'}>Female</MenuItem>
                            <MenuItem value={'Male'}>Male</MenuItem>
                            <MenuItem value={'I don`t want to specify'}>I don`t want to specify</MenuItem>
                        </Select>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='changeable-input-container'>
                        <TextField
                            id="outlined-helperText"
                            defaultValue="damlanur@hotmail.com"
                        />
                        <TextField
                            id="outlined-helperText"
                            defaultValue="123456"
                            type='password'
                        />
                    </div>  
                </div>
                <div className='update-button-container'>
                    <Button>
                        Update
                    </Button>        
                </div>
            </div>
        </div>
    </ProfileWrapper>
  )
}

export default Profile