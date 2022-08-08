import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const Loading = ({ text = 'LOADING', time = 300 }) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    const id = setInterval(
      () =>
        setContent((content) =>
          content === `${text}...` ? text : `${content}.`
        ),
      time
    );

    return () => clearInterval(id);
  }, [text, time]);

  return (
    <Typography
      variant='h4'
      component='span'
      textAlign='center'
      marginTop='30px'
    >
      {content}
    </Typography>
  );
};

export default Loading;
