import { Button } from '@mui/material';
import Background from './Background';
import { HomeWrapper } from './Home.styled';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  const openLoginPage = () => {
    const newPath = '/login';
    navigate(newPath);
  };

  const openRegisterPage = () => {
    const newPath = '/register';
    navigate(newPath);
  };

  return (
    <HomeWrapper>
      <Background />
      <div className='header'>
        <div className='button-container'>
          <Button
            onClick={openLoginPage}
          >
            LOGIN
          </Button>
          <Button
            onClick={openRegisterPage}
          >
            REGISTER
          </Button>
        </div>  
      </div>
    </HomeWrapper>
  )
}

export default Home;