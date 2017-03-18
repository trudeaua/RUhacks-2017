import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';
import {browserHistory} from 'react-router';

import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

class Login extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);
        this.state = {
            university: '',
            code: '',
            codeError: ''
        };
    }

    onNewTimetable(){
        browserHistory.push({
            pathname: '/main',
            query: { university: this.state.university}
        });
    }
    onLoadSchedule(){
        let context = this;
        sa.get('/api/schedule?code=' + this.state.code).end(function(err,res){
            if (err){
                console.log(err);
            } else {
                if (res.body.success){

                } else {
                    context.setState({codeError: 'Invalid Code'});
                }
            }
        });
    }

    onSelectChange(e, index, val){
        this.setState({university: val});
    }
    onTextFieldChange(e){
        this.setState({code: e.target.value, codeError: ''});
    }

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
        <div >
            <div>
                <Paper style={styles.wrapper} zDepth={5}>
                    <h2 style={styles.spacing}>Automatic Timetable Generator</h2>
                    <SelectField
                        floatingLabelText="Select Your University"
                        onChange={this.onSelectChange}
                        value={this.state.university}
                        style={{margin: '2% 0 2% 0', textAlign:'left'}}>
                        <MenuItem value='McMaster University' primaryText="McMaster University" />
                        <MenuItem value='University of Toronto' primaryText="University of Toronto" />
                        <MenuItem value='Ryerson University' primaryText="Ryerson University" />
                    </SelectField><br/>
                    <RaisedButton style={styles.spacing} label="Create New Timetable" onClick={this.onNewTimetable} disabled={this.university === ''}/><br/>
                    <Divider style={styles.spacing}/><br/>
                    <TextField style={styles.spacing} floatingLabelText="Schedule Code" errorText={this.state.codeError} onChange={this.onTextFieldChange}/><br/>
                    <RaisedButton name="code" style={styles.spacing} label="Load Timetable" disabled={this.state.code === ''} onClick={this.onLoadSchedule}/>
                </Paper>
            </div>
        </div>
        );
    }
}

Login.styles = {
    wrapper:{
        width: '50%',
        height:'50%',
        margin: '15% 0 0 25%',
        textAlign: 'center'
    },
    spacing:{
        margin: '2% 0 2% 0'
    },

    formContainer:{
        background:"white",
        padding:"3.5em",
        width:"500px",
        position:"relative",
        left:"50%",
        marginLeft:"-250px",
        marginTop:"5%",
        marginBottom: '0',
        border: "1px solid grey",
        boxShadow: "5px 5px 2px grey"
    },

    dropdown:{
        background:"#fff !important",
        width:"100%",
        padding:".5em .5em",
        border: "1px solid #BBBBBB",
        marginBottom:"10px",
        fontSize:"18px",
    },
    button:{
        padding:"1.2em",
        width:"100%",
        cursor:"pointer",
        marginBottom:"15px",
        fontSize:"1.3em",
        background:"#629CCD",
        color:"white",
        fontWeight:"bold",
    },
    txt:{
        background:"#fff !important",
        width:"100%",
        padding:".5em .75em",
        border: "1px solid #BBBBBB",
        marginBottom:"10px",
        fontSize:"18px",
        textAlign:"center"
    },

    h2:{
        margin: "1.7em 0 .9em 0",
        color:"#629CCD",
        textAlign:"center"
    }

};

export default Login;