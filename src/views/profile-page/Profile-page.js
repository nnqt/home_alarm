import { Grid, Divider, Typography} from "@mui/material";
import { gridSpacing } from 'store/constant';

import avatar from 'assets/images/users/rem.png'

// project imports
import MainCard from 'ui-component/cards/MainCard';

const Profile = () => {
    return (
        <MainCard title="User Profile">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sx={{mt: 3 }}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs>
                            <img src={avatar} alt = '' width='50%'/>
                        </Grid>
                        <Divider orientation="vertical" flexItem></Divider>
                        <Grid item xs>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs = {12}>
                                    <Typography variant="h2">
                                        Ngô Nguyễn Quốc Thịnh
                                    </Typography>
                                </Grid>
                                <Grid item xs = {12}>
                                    <Typography variant="h2">
                                        Admin
                                    </Typography>
                                </Grid>
                                <Grid item xs = {12}>
                                    <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    )
}

export default Profile;