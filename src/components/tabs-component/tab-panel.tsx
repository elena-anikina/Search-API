import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


export const TabPanel = ({children, value, index, ...other}: TabPanelProps) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography component={"span"} variant={"body2"}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}