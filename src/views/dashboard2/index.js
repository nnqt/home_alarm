import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';

// material-ui

// project imports
import DoorCard from './DoorCard';
import AlarmCard from './Alarm';
import LightCard from './LightLed';
import StatusCard from './Status';
import DateCard from './DateCard';
import HistoryTable from './HistoryTable';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid
                    container
                    spacing={gridSpacing}
                    sx={{
                        mt: 0
                    }}
                >
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <DoorCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <AlarmCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <LightCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <StatusCard isLoading={isLoading} />
                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    spacing={gridSpacing}
                    sx={{
                        mt: 1
                    }}
                >
                    <Grid item>
                        <DateCard />
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                item xs={12} 
                sx={{
                    mt: 2
                }}
            >
                <HistoryTable/>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
