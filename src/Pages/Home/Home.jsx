import { Button } from '@mui/material';
// import Background from './Background';
import { HomeWrapper } from './Home.styled';
import { useNavigate } from 'react-router';
// import tictactoe from '../../assets/pngs/tictactoe.jpeg';
// import chess from '../../assets/pngs/chess.jpeg';
// import hangman from '../../assets/pngs/hangman.jpeg';
// import snake from '../../assets/pngs/snake.jpeg';
import Header from '../../Components/Header';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rate from '../../Components/Rate';
import { useEffect, useState } from 'react';
import Filter from '../../Components/Filter';

const Home = () => {
  const [games, setGames] = useState([]);
  const userId = window.localStorage.getItem('userId');
  const navigate = useNavigate();

  const openLoginPage = () => {
    const newPath = '/login';
    navigate(newPath);
  };

  const openRegisterPage = () => {
    const newPath = '/register';
    navigate(newPath);
  };

  const openGamePage = (id) => {
    const filteredGameId = games.filter((game) => id === game.id);
    navigate(`/game/${filteredGameId[0].id}`);
  }; 

  const likeHandler = async (gameId, index) => {
    const checkedIsLiked = games[index].likes.includes(userId);
    if(checkedIsLiked) {
      const filteredLikes = games[index].likes.filter((id) => id !== userId);
      try {
        const likeRequest = await fetch(`http://localhost:3000/games/${gameId}`, {
          method: 'PATCH',
          body: JSON.stringify({ likes: filteredLikes})
        });
        if(!likeRequest.ok) {
          console.error('Error updating like status:', await likeRequest.text());
        } else {
          const updatedGames = [...games];
          updatedGames[index].likes = filteredLikes;
          setGames(updatedGames);
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const likesArr = [...games[index].likes, userId];
        const likeRequest = await fetch(`http://localhost:3000/games/${gameId}`, {
          method: 'PATCH',
          body: JSON.stringify({ likes: likesArr})
        });
        if(!likeRequest.ok) {
          console.error('Error updating like status:', await likeRequest.text());
        } else {
          const updatedGames = [...games];
          updatedGames[index].likes = likesArr;
          setGames(updatedGames);
        }
      } catch (error) {
        console.log(error)
      }
    }
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:3000/games');
        const gameData = await response.json();
        setGames(gameData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGames();
  }, []);

  return (
    <HomeWrapper>
      <div className='header'>
        <Header openRegisterPage={openRegisterPage} openLoginPage={openLoginPage} />
      </div>
      <div className='body-container'>
          <div className='filter-container'>
            <Filter gamesState={[games, setGames]}/>
          </div>
          <div className='game-part-container'>
            {
              games.map((game,index) => {
              return (
                <div key={index} className='game-images'>
                  <Button
                    onClick={() => openGamePage(game.id)}
                  >
                    <img 
                      className='game-image'
                      src={'src/assets/pngs/'+ game.image + '.jpeg'}
                    />
                    <div className='hovered-game'>
                      <div className='hovered-header'> 
                        <Button
                          onClick={() => likeHandler(game.id, index)}
                        >
                          {game.likes.includes(userId)  ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </Button>
                      </div>
                      <div className='game-content'>
                        <h2>{game.name}</h2>
                        <Rate gamesState={[games, setGames]} gameId={game.id} index={index}/>
                      </div>
                    </div>
                  </Button>
                </div>
              )
              })
            }
          </div>
        </div>
    </HomeWrapper>
  )
}

export default Home;