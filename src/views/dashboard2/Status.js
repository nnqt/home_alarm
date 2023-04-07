import PropTypes from 'prop-types';

// material-ui
import { styled} from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonDashboardCard from 'ui-component/cards/Skeleton/SkeletonDashboardCard';
import { useState } from 'react';
import { useEffect } from 'react';

// assets


const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: "white",
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -85,
        right: -95,
        [theme.breakpoints.down('sm')]: {
            top: -105,
            right: -140
        }
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: '50%',
        top: -125,
        right: -15,
        opacity: 0.5,
        [theme.breakpoints.down('sm')]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const StatusCard = ({ isLoading, statusDevice }) => {
    const [device, setDevice] = useState("INACTIVE")
    useEffect(() => {
        if(statusDevice){
            setDevice("ACTIVE")
        }
        else{
            setDevice("INACTIVE")
        }
    })

    return (
        <>
            {isLoading ? (
                <SkeletonDashboardCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <Typography 
                                            sx={{ 
                                                fontSize: '1.5rem', 
                                                fontWeight: 500, 
                                                mr: 1, mt: 1.75, mb: 0.75 ,
                                                color: 'gray'
                                            }}
                                        >
                                            STATUS SYSTEM
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 1.25 }}>
                                <Typography
                                    sx={{
                                        fontSize: '2rem',
                                        fontWeight: 500,
                                        mr: 1, mb: 5 ,
                                        color: 'black'
                                    }}
                                >
                                    {device}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

StatusCard.propTypes = {
    isLoading: PropTypes.bool
};

export default StatusCard;
