import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, styled, Typography } from '@mui/material';
import socialMedia from './utilities/SocialMedia';

const LinkItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
}))

function Footer() {

  return (
    <Box sx={{
      width: "100%",
      backgroundColor: "primary.light",
      display: "flex",
      justifyContent: "center"
    }}>
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "1280px",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem 0.5rem 1rem",
          gap: "40px",
          "& .MuiTypography-root": {
            color: "text.primary"
          }
        }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant='h5'>
            Join my adventure and return soon for more reviews.
          </Typography>
          <Typography variant='h6'>
            More reviews coming soon.
          </Typography>
        </Box>
        <Box sx={{
          display: "flex",
          gap: "20px",
          width: "100%",
          justifyContent: "space-around",
          flexDirection: {xs: "column-reverse", md: "row"}

        }}>
          <LinkItem>
            <Link to='/aboutme'>
              <Typography variant='h6'>About Me</Typography>
            </Link>
          </LinkItem>
          <LinkItem>
            <Typography variant='h6'>Contact</Typography>
            <Typography>cristhyancalderon@gmail.com</Typography>
          </LinkItem>
          <LinkItem>
            <Typography variant='h6'>Social Media</Typography>
            {socialMedia.map(social => {
              return (
                <Link key={social.name} to={social.link} target='_blank' aria-label={social.name}>
                  <Typography>{social.name}</Typography>
                </Link>
              )
            })}
          </LinkItem>
        </Box>
        <Box sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          gap: 2,
          flexDirection: {xs: "column-reverse", md: "row"}
        }}>
          <LinkItem>
            <Link to='/'>
              <img src="images/my-GmzLogo.png" alt="website logo" height={25} />
            </Link>
          </LinkItem>
          <LinkItem>
            <Typography variant='h6'>my-Gmz © 2024</Typography>
          </LinkItem>
          <LinkItem sx={{
            flexDirection: "row", width: "100%", justifyContent: "space-around", "& .MuiSvgIcon-root": {
              color: "text.primary"
            }
          }}>
            {socialMedia.map(social => {
              return (
                <Link key={social.name} to={social.link} target='_blank' aria-label={social.name}>
                  <IconButton>{social.icon}</IconButton>
                </Link>
              )
            })}
          </LinkItem>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;