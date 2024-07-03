import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'High Rate',
  'Liked'
];

function getStyles(name, sortValue, theme) {
  return {
    fontWeight:
      sortValue.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Filter({filteredGamesState ,gamesState}) {
  const theme = useTheme();
  const [sortValue, setSortValue] = useState('');
  const [filteredGames, setFilteredGames] = filteredGamesState;
  const [games, setGames] = gamesState;
  const userId = window.localStorage.getItem('userId');
  

  const handleChange = (event) => {
    const selectValue = event.target.value;
    setSortValue(selectValue);
  };

  useEffect(() => {
    if (sortValue === 'Liked') {
      const likedArr = filteredGames.filter((gameObj) => (
        gameObj.likes.includes(userId)
      ));
      setFilteredGames([...likedArr]);
      } else if (sortValue === 'High Rate') {
        const sortedGames = [...games].sort((a, b) => {
            const rateA = a.rates.find((rateObj) => rateObj.userId === userId)?.rate || 0;
            const rateB = b.rates.find((rateObj) => rateObj.userId === userId)?.rate || 0;
            return rateB - rateA;
        });
        console.log(sortedGames)
        setFilteredGames(sortedGames);
      } else {
        console.log(filteredGames);
      }
  },[sortValue]);

  useEffect(() => {
    console.log(filteredGames);
  }, [filteredGames]);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={sortValue}
          onChange={handleChange}
          style={{
            'backgroundColor': 'rgba(217, 214, 255, 0.753)',
            'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
            'backdrop-filter': 'blur(5.3px)',
            '-webkit-backdrop-filter': 'blur(5.3px)',
            'border': '1px solid rgba(108, 39, 255, 0.23)'
          }}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Sort by:</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, sortValue, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

Filter.propTypes = {
    gamesState: PropTypes.array,
    index: PropTypes.number
};