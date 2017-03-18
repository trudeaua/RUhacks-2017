import React from 'react';
import lodash from 'lodash';
import {browserHistory} from 'react-router';

import Sidebar from './sidebar.jsx';
import Timetable from './timetable.jsx';
import Topbar from './topbar.jsx'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            university: this.props.location.query.university
        };
    }

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <Timetable university={this.state.university}/>
            </div>
        );
    }
}

Main.styles = {

};

export default Main;