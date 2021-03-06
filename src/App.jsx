import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import  memories  from './assets/images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import useStyle from './style';


const App = () => {

    const classes = useStyle();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
