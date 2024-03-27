import { Button } from '@mui/material';
import Background from './Background';
import { HomeWrapper } from './Home.styled';
import { useNavigate } from 'react-router';
import tictactoe from '../../assets/pngs/tictactoe.jpeg';
import chess from '../../assets/pngs/chess.jpeg';
import hangman from '../../assets/pngs/hangman.jpeg';
import snake from '../../assets/pngs/snake.jpeg';
import Header from '../../Components/Header';



const Home = () => {
  const navigate = useNavigate();
  const games = [tictactoe,chess,hangman,snake];

  console.log(games);

  const openLoginPage = () => {
    const newPath = '/login';
    navigate(newPath);
  };

  const openRegisterPage = () => {
    const newPath = '/register';
    navigate(newPath);
  };

  const openGamePage = (e) => {
    console.log(e.target.src, 'e')
  }; 

  return (
    <HomeWrapper>
      {/* <Background /> */}
      <div className='header'>
        <Header />
        {/* <div className='button-container'>
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
        </div>   */}
      </div>
      <div className='body-container'>
          {
            games.map((game,index) => {
             return (
              <div key={index} className='game-images'>
                <Button
                  onClick={(e) => openGamePage(e)}
                >
                  <img className='game-image' src={game} />
                </Button>
              </div>
             )
            })
          }
        </div>
    </HomeWrapper>
  )
}

export default Home;