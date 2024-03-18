import { Button } from '@mui/material';
import Background from './Background';
import { HomeWrapper } from './Home.styled';
import { useNavigate } from 'react-router';
import tictactoe from '../../assets/pngs/tictactoe.jpeg';
import chess from '../../assets/pngs/chess.jpeg';
import hangman from '../../assets/pngs/hangman.jpeg';
import snake from '../../assets/pngs/snake.jpeg';



const Home = () => {
  const navigate = useNavigate();
  const games = [tictactoe,chess,hangman,snake];

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
      {/* <Background /> */}
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
      <div className='body-container'>
          {
            games.map((game) => {
              <div className='game-images'>
                <img className='game-image' src={game} />
              </div>
            })
          }
        </div>
    </HomeWrapper>
  )
}

export default Home;