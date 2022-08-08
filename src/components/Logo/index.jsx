import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <Stack
        direction='row'
        alignItems='center'
        spacing={0.5}
        sx={{ marginRight: '100px' }}
      >
        <img
          src={logo}
          alt='site logo'
          style={{ width: '44px', height: '40px' }}
        />
        <Typography
          variant='body1'
          component='h1'
          color='GrayText'
          fontSize='23px'
        >
          Keep
        </Typography>
      </Stack>
    </Link>
  );
};

export default Logo;
