import React from 'react';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import { Stack, Typography } from '@mui/material';
import ZIndex from '../../layout/WithZIndex';

const EmptyNotes = ({ description, isHomePage }) => {
  return (
    <ZIndex>
      <Stack
        sx={{
          width: '500px',
          margin: `${isHomePage ? '80px' : '250px'} auto 0 auto`,
          color: 'gray',
        }}
        alignItems="center"
      >
        <LightbulbOutlined
          sx={{
            width: '120px',
            height: '120px',
            marginBottom: '10px',
            color: 'ButtonFace',
          }}
        />
        <Typography fontSize="25px" fontWeight="400">
          {description}
        </Typography>
      </Stack>
    </ZIndex>
  );
};

export default EmptyNotes;
