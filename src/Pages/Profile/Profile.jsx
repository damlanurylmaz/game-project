import Header from '../../Components/Header'
import { ProfileWrapper } from './Profile.styled'
import vesikalik from '../../assets/pngs/vesikalik.jpg'
import { TextField } from '@mui/material'

const Profile = () => {
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
                    <div className='name-input-container'>
                        <h1>Profile Information</h1>
                        <TextField
                            id="outlined-read-only-input"
                            defaultValue="Name"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="outlined-read-only-input"
                            defaultValue="Surname"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                </div>
                <div className='form-changeable-part'>
                    <div className='changeable-input-container'>
                        <TextField
                            id="outlined-helperText"
                            defaultValue="Enter new email address."
                        />
                    </div>
                    <div className='changeable-input-container'>
                        <TextField
                            id="outlined-helperText"
                            defaultValue="damlanur@hotmail.com"
                            disabled
                            type='password'
                        />
                        <TextField
                            id="outlined-helperText"
                            defaultValue="Enter new password."
                        />
                    </div>
                </div>
            </div>
        </div>
    </ProfileWrapper>
  )
}

export default Profile