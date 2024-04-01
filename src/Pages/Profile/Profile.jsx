import Header from '../../Components/Header'
import { ProfileWrapper } from './Profile.styled'
import vesikalik from '../../assets/pngs/vesikalik.jpg'

const Profile = () => {
  return (
    <ProfileWrapper>
        <div className='header'>
            <Header />
        </div>
        <div className='profile-container'>
            <div className='profile-form'>
                <div className='profile-image'>
                    <img className='image' src={vesikalik} alt='Profile Image'/>
                </div>
            </div>
        </div>
    </ProfileWrapper>
  )
}

export default Profile