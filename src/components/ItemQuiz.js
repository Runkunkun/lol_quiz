import React from "react";
import Container from '@material-ui/core/Container';
import {itemData} from "../json_stash/items";
import {TextField, FormLabel} from "@material-ui/core";
import {Paper} from "@material-ui/core";
import BotNav from "./BotNav";


class ItemQuiz extends React.Component{
    render() {
        return (
            <div>
                <ItemCard />
                <ItemLegende />
                <BotNav />
            </div>
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
        const containerStyle = {
            marginTop: '5%'
        }

        return (
            <div className="ItemCard">
        {itemData.map((data, key) => {
            return (
                <Container maxWidth="sm" style={containerStyle}>
                    <Paper elevation={10}>
                        <div key={key}>
                            <div>
                               <img src={require("../picture_stash/items/"+data.imageURL)} style={formStyle} alt="Item"/>
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
                </Container>
            );
        })}
            </div>
        );
    }
}

class ItemLegende extends React.Component{
    render() {
        const formStyle = {
            margin: '5px'
        }
        const containerStyle = {
            marginTop: '5%'
        }
        return(
            <Container maxWidth="sm" style={containerStyle}>
              <Paper elevation={10}>
                  <FormLabel>Example Item</FormLabel>
                  <form>
                      <TextField id="demo-name" label="Name" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="ItemName"/>
                      <TextField id="demo-stats" label="Stats" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="10AP, 20AD, 12AS"/>
                      <TextField id="demo-passive" label="Passive" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="20% slow for 1 second"/>
                      <TextField id="demo-cost" label="Cost" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="450"/>
                      <TextField id="demo-components" label="Components" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="Component1, 40G"/>
                  </form>
              </Paper>
            </Container>
        );
    }
}

export default ItemQuiz
