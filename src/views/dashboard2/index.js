import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import api from '../../api/gets'

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
    const [statusDevice, setStatusDevice] = useState({"ledData": "", "buzzerData": "", "sensorData" : ""});
    const [ledStatus, setLedStatus] = useState("")
    const [buzzerStatus, setBuzzerStatus] = useState("")
    const [sensorStatus, setSenSorStatus] = useState("")

    useEffect(() => {
        setLoading(false);
    }, []);

    useEffect(() => {
        const fetchGets = async () => {
            try {
                const response = await api.get();
                setStatusDevice(response.data);
            } catch (err){
                if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                }
                else {
                    console.log(`Error: ${err.message}`);
                }
            }
        }
        fetchGets();
    }, [])
    
    useEffect(() => {
        setLedStatus(statusDevice.ledData)
        setBuzzerStatus(statusDevice.buzzerData)
        setSenSorStatus(statusDevice.sensorData)
    }, [statusDevice])
    

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
                        <DoorCard isLoading={isLoading} sensor={sensorStatus} />
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <AlarmCard isLoading={isLoading} buzzer={buzzerStatus}/>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <LightCard isLoading={isLoading} led={ledStatus}/>
                    </Grid>
                    <Grid item lg={3} md={6} sm={6} xs={12}>
                        <StatusCard isLoading={isLoading} statusDevice={Boolean(sensorStatus || buzzerStatus || ledStatus)}/>
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
