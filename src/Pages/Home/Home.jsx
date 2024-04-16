import { Button } from '@mui/material';
import Background from './Background';
import { HomeWrapper } from './Home.styled';
import { useNavigate } from 'react-router';
import tictactoe from '../../assets/pngs/tictactoe.jpeg';
import chess from '../../assets/pngs/chess.jpeg';
import hangman from '../../assets/pngs/hangman.jpeg';
import snake from '../../assets/pngs/snake.jpeg';
import Header from '../../Components/Header';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rate from '../../Components/Rate';

const Home = () => {
  const navigate = useNavigate();
  const games = [
      {
        name: 'TicTacToe',
        image: tictactoe
      },
      {
        name: 'Chess',
        image: chess
      },
      {
        name: 'Hangman',
        image: hangman
      },
      {
        name: 'Snake',
        image: snake
      }
  ];

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
        <Header openRegisterPage={openRegisterPage} openLoginPage={openLoginPage} />
      </div>
      <div className='body-container'>
          {
            games.map((game,index) => {
             return (
              <div key={index} className='game-images'>
                <Button
                  onClick={(e) => openGamePage(e)}
                >
                  <img 
                    className='game-image' 
                    src={game.image} 
                  />
                  <div className='hovered-game'>
                    <div className='hovered-header'> 
                      <Button>
                        <FavoriteBorderIcon />
                      </Button>
                    </div>
                    <div className='game-content'>
                      <h2>{game.name}</h2>
                      <Rate />
                    </div>
                  </div>
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