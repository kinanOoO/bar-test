import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Trans } from 'react-i18next';

export default function footer() {
    return (
        < Box sx={{ backgroundImage: `url(https://thumbs.dreamstime.com/z/fancy-drink-cocktails-21969486.jpg)`, p: 6 }
        } component="footer" >
            <Typography variant="h6" align="center" gutterBottom>
                {<Trans i18nKey="enjoy" />}
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                {<Trans i18nKey="thatsAll" />}
            </Typography>
        </Box >
    )
}