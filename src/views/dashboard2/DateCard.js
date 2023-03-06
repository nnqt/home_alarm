import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const DateCard = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, []);
    console.log(time)
    return (
        <div>
            
        </div>
    );
};

export default DateCard;
