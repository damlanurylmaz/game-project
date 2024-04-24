import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Rate({gameId, index, gamesState}) {
  const [rateValue, setRateValue] = useState(1);
  const userId = window.localStorage.getItem('userId');
  const [games, setGames] = gamesState;

  const rateHandler = async (e) => {
    const isRatedGame = games[index].rates.find((rateObj) => 
      rateObj.userId === userId
    );
    if(isRatedGame) {
      const newRates = games[index].rates.filter((rateObj) => rateObj.userId !== userId);
      try {
        const rateRequest = await fetch(`http://localhost:3000/games/${gameId}`, {
          method: 'PATCH',
          body:  JSON.stringify({ rates: [{userId, rate: e.target.defaultValue}]})
        });
        if(!rateRequest.ok) {
          console.error('Error updating rate status:', await rateRequest.text());
        } else {
          const updatedGames = [...games];
          updatedGames[index].rates = newRates;
          setGames(updatedGames);
        }
      } catch (error) {
        console.log(error)
      }
    }
  };

  useEffect(() => {

  },[])

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      <Typography component="legend">Rate Game</Typography>
      <Rating
        name="simple-controlled"
        value={rateValue}
        onChange={(e) => rateHandler(e, gameId)}
      />
    </Box>
  );
}

Rate.propTypes = {
  gameId: PropTypes.string,
  index: PropTypes.number,
  gamesState: PropTypes.array
};