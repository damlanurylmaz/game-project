import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export default function Rate() {
  const [value, setValue] = useState(1);

  const rateHandler =  (e) => {
    setValue(e.target.defaultValue);
    console.log(value)
  };

  useEffect(() => {
    // console.log(value);
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
        value={value}
        onChange={(e) => rateHandler(e)}
      />
    </Box>
  );
}