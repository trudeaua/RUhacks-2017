import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';

import {browserHistory} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

class ScheduleCreated extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);
        this.dismiss = this.props.dismiss;
        this.state = {
            code: this.props.code
        };
    }
    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper} className="text-center">
                <h1>Saved!</h1>
                <h4>Your access code is {this.state.code}</h4>
                <RaisedButton label='Okay!' primary={true} onClick={this.dismiss}/>
            </div>
        );
    }
}

ScheduleCreated.styles = {

};

export default ScheduleCreated;