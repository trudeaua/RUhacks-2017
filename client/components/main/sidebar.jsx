import React from 'react';
import lodash from 'lodash';
import Autobind from 'react-autobind';
import sa from 'superagent';

import {browserHistory} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        Autobind(this);
        this.state = {
            university: 'University of Toronto'
        };
    }
    getCourses(){
        sa.get('/api/course/bulk/').query({ university: this.state.university}).end(function(err,res){
            console.log(res.body);
        });
    }
    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <h1>Sidebar</h1>
                <RaisedButton label='action' onClick={this.getCourses}/>
            </div>
        );
    }
}

Sidebar.styles = {

};

export default Sidebar;