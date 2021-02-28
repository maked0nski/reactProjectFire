import React from 'react';
import {Paper, Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}))

function MainBlock1() {
    const classes = useStyles();
    return(
        <div className={classes.mainContent}>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Web Developer Blog</Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Web Developer Blog Web Developer BlogWeb Developeeloper BlogWeb Developer BlogWeb Developer BlogWeb
                    Developer BlogWeb Developer BlogWeb Developer BlogWeb Developer BlogWeb Developer BlogWeb Developer
                </Typography>


            </Container>
        </div>
    )
}

export default MainBlock1
