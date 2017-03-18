import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';

import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';

import Topbar from './topbar.jsx';

class Timetable extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);

        this.state = {
            content: this.getContent(),
            table: this.getCleanTable()
        }
    }

    getContent(){
        return [{
            university: 'University of Toronto',
            name: 'Intro to 1',
            faculty: 'CSC',
            code: '200',
            room: 'BA1200',
            lecture_time: 'M-12-15',
            tutorial_time: 'W-12-13'
        }];
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
        for (let i = 0; i < content.length; i++){
            let lec_time = content[i].lecture_time;
            let lec_day = lec_time.split('-')[0];
            let lec_start = parseInt(lec_time.split('-')[1]);
            let lec_end = parseInt(lec_time.split('-')[2]);
            let lec_title_time = parseInt(lec_start) + parseInt(Math.floor((lec_end - lec_start)/2));
            let name = content[i].name;
            let lec_color = this.getRandomColor();
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
            }

            let tut_time = content[i].tutorial_time;
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

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <Topbar/>
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
                <RaisedButton label="Do something" onClick={this.setTable}/>
            </div>
        );
    }
}

Timetable.styles = {

};

export default Timetable;