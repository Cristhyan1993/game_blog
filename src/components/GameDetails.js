import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation } from '@fortawesome/free-brands-svg-icons'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

function GameDetails(props) {
  return (
    <Box maxWidth="1280px" padding="3rem">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{props.gameDetails.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">Date Reviewed:
            <Typography color="text.primary" display="inline"> {props.gameDetails.reviewDate}</Typography>
          </Typography>
          <Typography color="text.secondary">Platform: <FontAwesomeIcon icon={faPlaystation} /></Typography>
          <Box display="flex" gap={4}>
            <Typography color="text.secondary">My Score:
              <Typography color="text.primary" display="inline"> {props.gameDetails.gameReview.conclusion.score}/10 <i className="fa-solid fa-star star" />
              </Typography>
            </Typography>
            <Typography color="text.secondary">
              Difficulty Rating:
              <Typography color="text.primary" display="inline"> {props.gameDetails.gameReview.difficulty.rating}/10 <i className="fa-solid fa-fire fire" />
              </Typography>
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Game Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            {props.gameDetails.gameReview.gameOverview}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Gameplay</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            {props.gameDetails.gameReview.gameplay}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography component="span">Controls</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            {props.gameDetails.gameReview.controls}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography component="span">Difficulty</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            {props.gameDetails.gameReview.difficulty.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography component="span">Multiplayer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            {props.gameDetails.gameReview.multiplayer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7-header"
        >
          <Typography component="span">Conclusion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="text.secondary">
            {props.gameDetails.gameReview.conclusion.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default GameDetails