import React from "react";
import Container from '@material-ui/core/Container';
import {itemData} from "../json_stash/items";
import {TextField, FormLabel, Button} from "@material-ui/core";
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

        const choosenIndex = 0;

        this.state = {
            imageURL: itemData[choosenIndex].imageURL,
            name: '',
            stats: [],
            passive: '',
            cost: '',
            components: [],
            nameCheck: itemData[choosenIndex].name,
            statsCheck: itemData[choosenIndex].stats,
            passiveCheck: itemData[choosenIndex].passive,
            costCheck: itemData[choosenIndex].cost,
            componentsCheck: itemData[choosenIndex].components,
            nameLabel: 'Name',
            statsLabel: 'Stats',
            passiveLabel: 'Passive',
            costLabel: 'Cost',
            componentsLabel: 'Components',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckInput = this.handleCheckInput.bind(this);
        this.handleNextItem = this.handleNextItem.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleCheckInput(event){
        let checkedName = 'Wrong';
        let checkedStats = 'Wrong';
        let checkedPassive = 'Wrong';
        let checkedCost = 'Wrong';
        let checkedComponents = 'Wrong';
        if (this.state.name === this.state.nameCheck){
            checkedName = 'Right';
        }
        if (this.state.cost === this.state.costCheck){
            checkedCost = 'Right';
        }

        this.setState({
            nameLabel: checkedName,
            statsLabel: checkedStats,
            passiveLabel: checkedPassive,
            costLabel: checkedCost,
            componentsLabel: checkedComponents,
        });
    }

    handleNextItem(event){

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
                <Container maxWidth="sm" style={containerStyle}>
                    <Paper elevation={10}>
                        <div>
                            <img src={require("../picture_stash/items/"+this.state.imageURL)} style={formStyle} alt="Item"/>
                        </div>
                        <TextField id="item-name" name="name" label={this.state.nameLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange}/>
                        <TextField id="item-stats" name="stats" label={this.state.statsLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange}/>
                        <TextField id="item-passive" name="passive" label={this.state.passiveLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange}/>
                        <TextField id="item-cost" name="cost" label={this.state.costLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange}/>
                        <TextField id="item-components" name="components" label={this.state.componentsLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange}/>
                        <div>
                            <Button variant="contained" color="secondary" style={formStyle} onClick={this.handleCheckInput}>Check</Button>
                            <Button variant="contained" color="secondary" style={formStyle} onClick={this.handleNextItem}>Next Item</Button>
                        </div>
                    </Paper>
                </Container>
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
                  <FormLabel style={formStyle}>Example Item</FormLabel>
                      <TextField id="demo-name" label="Name" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="ItemName"/>
                      <TextField id="demo-stats" label="Stats" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="10AP, 20AD, 12AS"/>
                      <TextField id="demo-passive" label="Passive" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="20% slow for 1 second"/>
                      <TextField id="demo-cost" label="Cost" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="450"/>
                      <TextField id="demo-components" label="Components" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="Component1, 40G"/>
              </Paper>
            </Container>
        );
    }
}

export default ItemQuiz
