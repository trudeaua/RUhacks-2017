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
            lecture_times: [
                'M-12-13'
            ],
            tutorial_times: [
                'W-12-13'
            ]
        }];
    }
    getCleanTable(){
        let table = [];
        for (let i = 8; i < 12; i++){
            table.push({
                time: i + 'AM',
                monday: true,
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
            monday: true,
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
                monday: true,
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
        }
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
                                <TableRowColumn style={{backgroundColor: row.mondayColor}}></TableRowColumn>
                                <TableRowColumn style={{backgroundColor: row.tuesdayColor}}></TableRowColumn>
                                <TableRowColumn style={{backgroundColor: row.wednesdayColor}}></TableRowColumn>
                                <TableRowColumn style={{backgroundColor: row.thursdayColor}}></TableRowColumn>
                                <TableRowColumn style={{backgroundColor: row.fridayColor}}></TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }
}

Timetable.styles = {

};

export default Timetable;