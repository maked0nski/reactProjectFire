import React from 'react';
import {Paper, Container, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay:{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "rgba(0,0,0,.3)"
    },
    mainFeaturesPostContent:{
        position: "relative",
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    }
}))

function Main() {
    const classes = useStyles();
    return(
        <main>
            <Paper className={classes.mainFeaturesPost}
                   style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2014/04/01/15/26/fire-fighting-302586_960_720.jpg)`}}>
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md="6">
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterBottom
                                >
                                    Web Developer Blog
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="inherit"
                                    paragraph
                                >
                                    loren ipsum dolar sit amet, c loren ipsum dolar sit amet, c loren ipsum dolar sit amet, c loren ipsum dolar sit amet, c loren ipsum dolar sit amet, c

                                </Typography>
                                <Button variant="contained" color="secondary">
                                    Детальніше
                                </Button>

                            </div>
                        </Grid>
                    </Grid>

                </Container>
            </Paper>
        </main>
    )
}

export default Main
