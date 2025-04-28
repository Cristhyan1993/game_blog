import React from "react";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation } from '@fortawesome/free-brands-svg-icons'
import { Box, Button, Typography, useTheme } from "@mui/material";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

function HeroSection(props) {
  const {palette} = useTheme();
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <Box height="100vh" sx={{
      backgroundImage: `url(${props.gameDetails.images.cover})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      
      // background: `radial-gradient(circle,${palette.primary.dark} 25%, ${palette.primary.main} 50%, ${palette.primary.dark} 75%, ${palette.primary.dark} 100%)`,
    }}>
      {props.gameDetails.logo ?
        <Box height="100%" textAlign="center" display="flex" flexDirection="column" gap={15} alignItems="center" justifyContent="center" sx={{background:"rgba(0, 0, 0, 0.4)"}}>
          <Box padding={2}>
            <Typography variant="h2" color="primary.light" fontWeight={20} textTransform="uppercase">Gameplay & Reviews</Typography>
            
            <Typography variant="h5" color="secondary.light">{props.gameDetails.heroText}</Typography>
          </Box>
          <img src={props.gameDetails.logo} height="50px" alt="blog logo"/>
          <Box display="flex" gap={5} flexWrap="wrap" justifyContent="inherit" alignItems="center">
            <HashLink
              to="/#cards"
              scroll={el => scrollWithOffset(el, 80)}
            >
              <Button variant="contained" size="large" startIcon={<VideogameAssetIcon />}>
                <Typography variant="h6">Favourite Games</Typography>
              </Button>
            </HashLink>
            <Box>
              <Typography variant="h6">Add Me on PlayStation <FontAwesomeIcon icon={faPlaystation} /></Typography>
              <Typography variant="h6">PSN Id: <Typography variant="h6" display="inline" color="primary.light">Diego-Unchained-</Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
        :
        <Box sx={{background:"rgba(0, 0, 0, 0.4)"}} height="100%"  textAlign="center" display="flex" flexDirection="column" gap={2} alignItems="center" justifyContent="center">
          <Typography variant="h1" color="secondary.dark">{props.gameDetails.title}</Typography>
          <Typography variant="h5" color="secondary.light">{props.gameDetails.heroText}</Typography>
        </Box>
      }
    </Box>
  );
}

export default HeroSection;
