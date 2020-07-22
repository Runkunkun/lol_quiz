import React from "react";
import Container from '@material-ui/core/Container';
import {itemData} from "../json_stash/items";
import {TextField} from "@material-ui/core";
import {Paper} from "@material-ui/core";


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

        const formStyle = {
            margin: '5px'
        }

        return (
            <div className="ItemCard">
        {itemData.map((data, key) => {
            return (
                    <Paper elevation={3}>
                    <div key={key}>
                        <div>
                           <img src={require("../picture_stash/items/"+data.imageURL)} style={formStyle}/>
                        </div>
                        <form>
                            <TextField id="item-name" label="Name" variant="outlined" style={formStyle}/>
                            <TextField id="item-stats" label="Stats" variant="outlined" style={formStyle}/>
                            <TextField id="item-passive" label="Passive" variant="outlined" style={formStyle}/>
                            <TextField id="item-cost" label="Cost" variant="outlined" style={formStyle}/>
                            <TextField id="item-components" label="Components" variant="outlined" style={formStyle}/>
                        </form>
                    </div>
                    </Paper>
            );
        })}
            </div>
        );
    }
}

export default ItemQuiz
