import React from 'react';
import YoutubeVideo from './YoutubeVideo';
import { Box, Typography, useTheme } from '@mui/material';

const VideoCards = ({ cardDetails }) => {
    const { palette } = useTheme();
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} maxWidth="1280px" padding="3rem">
            <Typography variant='h3' textTransform="uppercase" sx={{
                background: `linear-gradient(90deg, ${palette.primary.light}, ${palette.secondary.light}, ${palette.primary.light})`,
                backgroundClip: "text",
                webkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>Videos</Typography>
            <Box padding={2} bgcolor="secondary.main" borderRadius={2} display="flex" justifyContent="center" flexWrap= "wrap" gap={5}>

                {cardDetails.videos.map(video => {
                    return (
                        <Box maxWidth="320px" display="flex" flexDirection="column" gap={2} >
                        <Typography variant="h6" height="100%" textAlign="center">{video.videoTitle}</Typography>
                            <YoutubeVideo url={video.url} />
                            <Typography color='text.secondary' textAlign="center">{video.description}</Typography>
                        </Box>
                    )
                })}
            </Box></Box>
    )
}

export default VideoCards