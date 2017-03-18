import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';

import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui/Table';
import {browserHistory} from 'react-router';

class Timetable extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);

        this.state = {
            table: this.getCleanTable()
        }
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

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
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