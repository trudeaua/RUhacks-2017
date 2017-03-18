import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';

import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {browserHistory} from 'react-router';

import Topbar from './topbar.jsx';
import Sidebar from './sidebar.jsx';
import ScheduleCreated from '../dialogs/scheduleCreated.jsx';
import Preferences from '../dialogs/preferences.jsx';
class Timetable extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);

        this.state = {
            university: this.props.university,
            content: [],
            table: this.getCleanTable(),

            scheduleCode: '',
            showPreferences: false,
            showScheduleCreated: false
        };
    }

    setContent(courses){
        let context = this;
        this.setState({content: courses}, function(){
            context.setTable();
        });
    }
    getCleanTable(){
        let table = [];
        for (let i = 8; i < 12; i++){
            table.push({
                time: i + 'AM',
                monday: false,
                mondayText: '',
                mondayColor: '#FFFFFF',
                tuesday: false,
                tuesdayText: '',
                tuesdayColor: '#FFFFFF',
                wednesday: false,
                wednesdayText: '',
                wednesdayColor: '#FFFFFF',
                thursday: false,
                thursdayText: '',
                thursdayColor: '#FFFFFF',
                friday: false,
                fridayText: '',
                fridayColor: '#FFFFFF'
            });
        }
        table.push({
            time: '12PM',
            monday: false,
            mondayText: '',
            mondayColor: '#FFFFFF',
            tuesday: false,
            tuesdayText: '',
            tuesdayColor: '#FFFFFF',
            wednesday: false,
            wednesdayText: '',
            wednesdayColor: '#FFFFFF',
            thursday: false,
            thursdayText: '',
            thursdayColor: '#FFFFFF',
            friday: false,
            fridayText: '',
            fridayColor: '#FFFFFF'
        });
        for (let i = 1; i < 9; i++){
            table.push({
                time: i + 'PM',
                monday: false,
                mondayText: '',
                mondayColor: '#FFFFFF',
                tuesday: false,
                tuesdayText: '',
                tuesdayColor: '#FFFFFF',
                wednesday: false,
                wednesdayText: '',
                wednesdayColor: '#FFFFFF',
                thursday: false,
                thursdayText: '',
                thursdayColor: '#FFFFFF',
                friday: false,
                fridayText: '',
                fridayColor: '#FFFFFF'
            });
        }
        return table;
    }

    setTable(){
        let table = this.getCleanTable();
        let content = this.state.content;
		let content2 = [];
		for( let k=0;k<this.state.content.length;k++){
			content2.push(this.state.content[k].split(", "));
			console.log(content2[k]);
		}
        for (let i = 0; i < content.length; i++){
            let lec_time = content2[i][6].trim();
            let lec_day = lec_time.split('-')[0];
            let lec_start = parseInt(lec_time.split('-')[1]);
            let lec_end = parseInt(lec_time.split('-')[2]);
            let lec_title_time = parseInt(lec_start) + parseInt(Math.floor((lec_end - lec_start)/2));
            let name = content2[i][2];
            let lec_color = this.getRandomColor();
			console.log(lec_day);
            switch (lec_day){
                case 'M':
                    for (let t = lec_start - 8; t < lec_end - 8; t++){
                        table[t].monday = true;
                        table[t].mondayColor = lec_color;
                        if (t == lec_title_time - 8){
                            table[t].mondayText = 'L: ' + name;
                        }
                    }
                    break;
                case 'T':
					console.log("hello");
                    for (let t = lec_start - 8; t < lec_end - 8; t++){
                        table[t].tuesday = true;
                        table[t].tuesdayColor = lec_color;
                        if (t == lec_title_time - 8){
                            table[t].tuesdayText = 'L: ' + name;
                        }
                    }
                    break;
                case 'W':
                    for (let t = lec_start - 8; t < lec_end - 8; t++){
                        table[t].wednesday = true;
                        table[t].wednesdayColor = lec_color;
                        if (t == lec_title_time - 8){
                            table[t].wednesdayText = 'L: ' + name;
                        }
                    }
                    break;
                case 'R':
                    for (let t = lec_start - 8; t < lec_end - 8; t++){
                        table[t].thursday = true;
                        table[t].thursdayColor = lec_color;
                        if (t == lec_title_time - 8){
                            table[t].thursdayText = 'L: ' + name;
                        }
                    }
                    break;
                case 'F':
                    for (let t = lec_start - 8; t < lec_end - 8; t++){
                        table[t].friday = true;
                        table[t].fridayColor = lec_color;
                        if (t == lec_title_time - 8){
                            table[t].fridayText = 'L: ' + name;
                        }
                    }
                    break;
				
				default:
					console.log("hjk");
					break;
            }

            let tut_time = content2[i][7].trim();
			console.log(tut_time);
            let tut_day = tut_time.split('-')[0];
            let tut_start = parseInt(tut_time.split('-')[1]);
            let tut_end = parseInt(tut_time.split('-')[2]);
            let tut_title_time = parseInt(tut_start) + parseInt(Math.floor((tut_end - tut_start)/2));
            let tut_color = this.getRandomColor();
            switch (tut_day){
                case 'M':
                    for (let t = tut_start - 8; t < tut_end - 8; t++){
                        table[t].monday = true;
                        table[t].mondayColor = tut_color;
                        if (t == tut_title_time - 8){
                            table[t].mondayText = 'T: ' + name;
                        }
                    }
                    break;
                case 'T':
                    for (let t = tut_start - 8; t < tut_end - 8; t++){
                        table[t].tuesday = true;
                        table[t].tuesdayColor = tut_color;
                        if (t == tut_title_time - 8){
                            table[t].tuesdayText = 'T: ' + name;
                        }
                    }
                    break;
                case 'W':
                    for (let t = tut_start - 8; t < tut_end - 8; t++){
                        table[t].wednesday = true;
                        table[t].wednesdayColor = tut_color;
                        if (t == tut_title_time - 8){
                            table[t].wednesdayText = 'T: ' + name;
                        }
                    }
                    break;
                case 'R':
                    for (let t = tut_start - 8; t < tut_end - 8; t++){
                        table[t].thursday = true;
                        table[t].thursdayColor = tut_color;
                        if (t == tut_title_time - 8){
                            table[t].thursdayText = 'T: ' + name;
                        }
                    }
                    break;
                case 'F':
                    for (let t = tut_start - 8; t < tut_end - 8; t++){
                        table[t].friday = true;
                        table[t].fridayColor = tut_color;
                        if (t == tut_title_time - 8){
                            table[t].fridayText = 'T: ' + name;
                        }
                    }
                    break;
            }
        }
		console.log(table);
        this.setState({table: table});
    }
    getRandomColor() {
        let letters = 'BCDEF'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    onSave(){
        let courseIds = [];
        for (let i = 0; i < this.state.content.length; i++){
            courseIds += content2[i][0];
        }
        let context = this;
        let code = this.generateCode();
        sa.put('/api/schedule/').send({
            code: code,
            university: this.state.university,
            courses: courseIds
        }).end(function(err,res){
            if (err){
                console.log(err);
            } else {
                context.setState({scheduleCode: code, showScheduleCreated: true});
            }
        });
    }
    generateCode() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( let i=0; i < 5; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    onCloseScheduleCreated(){
        this.setState({showScheduleCreated: false});
    }
    onClosePreferences(){
        this.setState({showPreferences: false});
    }
    onGenerateSchedule(){
        console.log('here');
        this.setState({showPreferences: true});
    }

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <div className="col-xs-12 col-md-3">
                    <Sidebar onSetContent={this.setContent} onGenerate={this.onGenerateSchedule}/>
                </div>
                <div className="col-xs-12 col-md-9">
                    <Topbar onSave={this.onSave}/>
                    <h4 className="text-center" style={{margin: '0 0 0 0'}}>Time Table</h4>
                    <Table selectable={false}>
                        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn/>
                                <TableHeaderColumn>Monday</TableHeaderColumn>
                                <TableHeaderColumn>Tuesday</TableHeaderColumn>
                                <TableHeaderColumn>Wednesday</TableHeaderColumn>
                                <TableHeaderColumn>Thursday</TableHeaderColumn>
                                <TableHeaderColumn>Friday</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} >
                            {this.state.table.map( (row, index) => (
                                <TableRow displayBorder={true} key={index}>
                                    <TableRowColumn>{row.time}</TableRowColumn>
                                    <TableRowColumn style={{backgroundColor: row.mondayColor}}>{row.mondayText}</TableRowColumn>
                                    <TableRowColumn style={{backgroundColor: row.tuesdayColor}}>{row.tuesdayText}</TableRowColumn>
                                    <TableRowColumn style={{backgroundColor: row.wednesdayColor}}>{row.wednesdayText}</TableRowColumn>
                                    <TableRowColumn style={{backgroundColor: row.thursdayColor}}>{row.thursdayText}</TableRowColumn>
                                    <TableRowColumn style={{backgroundColor: row.fridayColor}}>{row.fridayText}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Dialog
                    open={this.state.showScheduleCreated}
                    onRequestClose={this.onCloseScheduleCreated}
                    contentStyle={styles.dialog}>
                    <ScheduleCreated code={this.state.scheduleCode} dismiss={this.onCloseScheduleCreated}/>
                </Dialog>
                <Dialog
                    open={this.state.showPreferences}
                    onRequestClose={this.onClosePreferences}
                    contentStyle={styles.dialog}>
                    <Preferences onGenerate={this.onGenerateSchedule}/>
                </Dialog>
            </div>
        );
    }
}

Timetable.styles = {

};

export default Timetable;