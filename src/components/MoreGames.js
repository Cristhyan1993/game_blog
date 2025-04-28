import React, { useState } from 'react'
import { Box, FormControlLabel, FormGroup, Grid, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import GridOnIcon from '@mui/icons-material/GridOn';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import allGames from './utilities/AllGames';

const MoreGames = () => {
    const [gridView, setGridView] = useState(true)
    return (
        <div className='component-container'>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "50px"
            }}>
                <Typography variant='h3' sx={{textTransform: "uppercase"}}>More Games</Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch defaultChecked checked={gridView} onClick={() => setGridView(!gridView)} />}
                        label={gridView ? <Box display="inline-flex" gap={1}>Table View<FormatListBulletedIcon/></Box> : <Box display="inline-flex" gap={1}>Grid View <GridOnIcon/></Box>}
                        />
                </FormGroup>
                {gridView ?
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell align="right">Platform</TableCell>
                                    <TableCell align="right">Played</TableCell>
                                    <TableCell align="right">Completed</TableCell>
                                    <TableCell align="right">Review</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allGames.map((row) => (
                                    <TableRow
                                        key={row.title}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="right">{row.platform}</TableCell>
                                        <TableCell align="right">{row.played ? <DoneIcon /> : <ClearIcon />}</TableCell>
                                        <TableCell align="right">{row.completed ? <DoneIcon /> : <ClearIcon />}</TableCell>
                                        <TableCell align="right">{row.reviewAvailable ? <DoneIcon /> : <ClearIcon />}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: "100%" }}>
                        {allGames.map((game) => {
                            return (
                                <Grid size={4} key={game.title}>
                                    <Box sx={{ height: "100%", width: "100%", objectFit: "cover", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                                        <img
                                            height={200}
                                            width={150}
                                            alt={game.title}
                                            src={game.cover}
                                        />
                                        <Typography>{game.title}</Typography>
                                        <Typography>{game.platform}</Typography>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                }
            </Box>
        </div>
    )
}

export default MoreGames