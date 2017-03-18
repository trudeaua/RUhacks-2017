import React from 'react';
import lodash from 'lodash';
import {browserHistory} from 'react-router';

class Timetable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <h1>Time Table</h1>
            </div>
        );
    }
}

Timetable.styles = {

};

export default Timetable;