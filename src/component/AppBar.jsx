import React from 'react';
import Button from "@material-ui/core/Button";
import { AppBar, Container, Toolbar, IconButton, Typography, Box} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButtom: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1,
        textTransform: "uppercase"
    }
}))



function Appbar() {
    const classes = useStyles();
    return(
        <AppBar position = "fixed" style={{ background: '#2E3B55' }}>
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start"
                                color="inherit"
                                aria-label="menu"
                                className={classes.menuButtom}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Пожежне спостереження Івано-Франківськ</Typography>
                    <Box mr={3}>
                        <Button color="inherit" variant="outlined">Вхід</Button>
                    </Box>
                    {/*<Button color="secondary" variant="contained">Вихід</Button>*/}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Appbar
