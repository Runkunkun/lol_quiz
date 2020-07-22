import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import React from "react";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <Container>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Imprint" />
            </BottomNavigation>
        </Container>
    );
}
