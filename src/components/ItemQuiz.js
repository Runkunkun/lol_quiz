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
            stats: '',
            passive: '',
            cost: '',
            components: '',
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
        this.handleShowAnswers = this.handleShowAnswers.bind(this);
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

        const statsArray = this.state.stats.split(', ')
        if (statsArray.length === this.state.statsCheck.length){
            let hit = 0;

            for(let i=0;i<statsArray.length;i++){
                if (this.state.statsCheck.includes(statsArray[i])){
                    hit++;
                }
            }

            if (hit === this.state.statsCheck.length){
                checkedStats = 'Right';
            }
        }

        const componentsArray = this.state.components.split(', ')
        if (componentsArray.length === this.state.componentsCheck.length){
            let hit = 0;

            for(let i=0;i<componentsArray.length;i++){
                if (this.state.componentsCheck.includes(componentsArray[i])){
                    hit++;
                }
            }

            if (hit === this.state.componentsCheck.length){
                checkedComponents = 'Right';
            }
        }

        const passiveArray = this.state.passive.split(' ')
            let hit = 0;

            for(let i=0;i<passiveArray.length;i++){
                if (this.state.passiveCheck.includes(passiveArray[i])){
                    hit++;
                }
            }

            if (hit === this.state.passiveCheck.length){
                checkedPassive = 'Probably Right';
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
        const choosenIndex = Math.floor(Math.random() * (12 + 1));

        this.setState({
            imageURL: itemData[choosenIndex].imageURL,
            name: '',
            stats: '',
            passive: '',
            cost: '',
            components: '',
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
        });
    }

    handleShowAnswers(event){

        let statString = '';
        for(let i=0; i<this.state.statsCheck.length;i++){
            statString += this.state.statsCheck[i]
            if(i!==this.state.statsCheck.length-1){
                statString += ', '
            }
        }
        let passiveString = '';
        for(let i=0; i<this.state.passiveCheck.length;i++){
            passiveString += this.state.passiveCheck[i]
            if(i!==this.state.passiveCheck.length-1){
                passiveString += ' '
            }
        }
        let componentsString = '';
        for(let i=0; i<this.state.componentsCheck.length;i++){
            componentsString += this.state.componentsCheck[i]
            if(i!==this.state.componentsCheck.length-1){
                componentsString += ', '
            }
        }

        this.setState({
            nameLabel: this.state.nameCheck,
            statsLabel: statString,
            passiveLabel: passiveString,
            costLabel: this.state.costCheck,
            componentsLabel: componentsString,
        });
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
                        <Container>
                            <img src={require("../picture_stash/items/"+this.state.imageURL)} style={formStyle} alt="Item"/>
                        </Container>
                        <Container>
                        <TextField id="item-name" name="name" label={this.state.nameLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange} value={this.state.name}/>
                        <TextField id="item-stats" name="stats" label={this.state.statsLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange} value={this.state.stats}/>
                        <TextField id="item-passive" name="passive" label={this.state.passiveLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange} value={this.state.passive}/>
                        <TextField id="item-cost" name="cost" label={this.state.costLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange} value={this.state.cost}/>
                        <TextField id="item-components" name="components" label={this.state.componentsLabel} variant="outlined" style={formStyle} onChange={this.handleInputChange} value={this.state.components}/>
                        </Container>
                        <Container>
                            <Button variant="contained" color="secondary" style={formStyle} onClick={this.handleCheckInput}>Check</Button>
                            <Button variant="contained" color="secondary" style={formStyle} onClick={this.handleNextItem}>Next Item</Button>
                            <Button variant="contained" color="secondary" style={formStyle} onClick={this.handleShowAnswers}>Answers</Button>
                        </Container>
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
                  <div>
                  <FormLabel style={formStyle}>Example Item</FormLabel>
                  </div>
                      <TextField id="demo-name" label="Name" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="ItemName"/>
                      <TextField id="demo-stats" label="Stats" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="10AP, 20AD, 12AS"/>
                      <TextField id="demo-passive" label="Passive" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="20% slow for 1 second"/>
                      <TextField id="demo-cost" label="Cost" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="450"/>
                      <TextField id="demo-components" label="Components" variant="outlined" style={formStyle} InputProps={{readOnly: true,}} value="Component One, 40G"/>
              </Paper>
            </Container>
        );
    }
}

export default ItemQuiz
