import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import '../App.css';

function CardItem(props) {
  return (
    <Box sx={{ display: "flex", flex: "1", margin: "10px", borderRadius: "10px", backgroundColor: "primary.light", boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)" }}>
      <Box sx={{
        display: "flex",
        flexFlow: "column",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        textDecoration: "none",
      }}><Link to={props.path}>
          <Box sx={{ position: "relative", width: "100%", minHeight: "200px", }}>
            <img
              className='cards__item__img'
              alt={props.label}
              src={props.src}
            />
            
          </Box>
          <Box padding={2}>
          <Typography variant='h6' gutterBottom color='text.primary'>{props.label}</Typography>
            <Typography color="text.secondary">{props.text}</Typography>
          </Box>
        </Link>
      </Box>

    </Box>
  );
}

export default CardItem;