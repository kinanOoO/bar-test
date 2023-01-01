import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loader() {
    return (
        <Box sx={{ width: '100%', alignContent: "center" }} py={25} boxShadow="initial">
            <LinearProgress />
        </Box>
    );
} 