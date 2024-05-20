import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Rate({gameId, index, gamesState}) {
  const [rateValue, setRateValue] = useState(1);
  const userId = window.localStorage.getItem('userId');
  const [filteredGames, setFilteredGames] = gamesState;

  const rateHandler = async (e, newValue) => {
    console.log(e.target.id, ` ss`);
    e.stopPropagation();
    const isRatedGame = filteredGames[index].rates.find((rateObj) => 
      rateObj.userId === userId
    );
    console.log(isRatedGame);
    if(isRatedGame) {
      const rateControl = filteredGames[index].rates.filter((rateObj) => rateObj.userId !== userId);
      const newRates = [...rateControl, {userId, rate: newValue}];
      try {
        const rateRequest = await fetch(`http://localhost:3000/games/${gameId}`, {
          method: 'PATCH',
          body:  JSON.stringify({ rates: newRates})
        });
        if(!rateRequest.ok) {
          console.error('Error updating rate status:', await rateRequest.text());
        } else {
          const updatedGames = [...filteredGames];
          updatedGames[index].rates = newRates;
          setRateValue(newValue);
          setFilteredGames(updatedGames);
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const newRates = [...filteredGames[index].rates, {userId, rate: newValue}];
        const rateReq = await fetch(`http://localhost:3000/games/${gameId}`, {
          method: 'PATCH',
          body: JSON.stringify({ rates: newRates})
        });
        if(!rateReq.ok) {
          console.error('Error updating rate status:', await rateReq.text());
        } else {
          const updatedGames = [...filteredGames];
          updatedGames[index].rates = newRates;
          setRateValue(newValue);
          setFilteredGames(updatedGames);
        }
      } catch (error) {
        console.log(error)
      }
    }
  };

  useEffect(() => {
    const newRateObj = filteredGames[index].rates.find((rateObj) => rateObj.userId === userId);
    setRateValue(newRateObj !== undefined ? newRateObj.rate : 0);
  },[filteredGames]);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'marginBottom': 5
      }}
    >
      <Typography component="legend">Rate Game</Typography>
      <Rating
        name="simple-controlled"
        value={rateValue}
        onChange={(e, newValue) => rateHandler(e, newValue)}
        sx={{'outline': 'yellow'}}
      />
    </Box>
  );
}

Rate.propTypes = {
  gameId: PropTypes.string,
  index: PropTypes.number,
  gamesState: PropTypes.array
};
