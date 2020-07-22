import React from "react";
import Container from '@material-ui/core/Container';
import {FormControl, FormGroup, FormControlLabel, FormLabel, Switch} from "@material-ui/core";

class ItemQuiz extends React.Component{
    render() {
        return (
            <Container maxWidth="sm">
                <ItemCard />
            </Container>
        );
    }
}

class ItemCard extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>Item Quiz</h1>
        );
    }
}

export default ItemQuiz
