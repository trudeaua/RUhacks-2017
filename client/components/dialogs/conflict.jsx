import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';

import {browserHistory} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

class Conflict extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);
        this.dismiss = this.props.dismiss;
        this.state = {
            conflicts: this.props.conflicts
        };
    }
    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper} className="text-center">
                <h1>Conflict!</h1>
                <h4>{this.state.conflicts[0]} and {this.state.conflicts[1]} conflicts.</h4>
                <RaisedButton label='Okay!' primary={true} onClick={this.dismiss}/>
            </div>
        );
    }
}

Conflict.styles = {

};

export default Conflict;