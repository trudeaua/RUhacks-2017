import React from 'react';
import lodash from 'lodash';
import {browserHistory} from 'react-router';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper} className="row">
                <div className="col-xs-12 col-md-6 text-center">
                    <p style={styles.Info}>Number of courses: 4</p>
                    <p style={styles.Info}>Hours per week: 34</p>
                </div>
                <div className="col-xs-12 col-md-6 text-center">
                    <p style={styles.Info}>Credits: 6</p>
                    <p style={styles.Info}>Average number of hours per day: 12</p>
                </div>
            </div>
        );
    }
}

Topbar.styles = {
    Wrapper: {
        padding: '2% 0 0 0',
        maxHeight: '5%'
    },
    Info: {
        margin: '0 0 0 0'
    }

};

export default Topbar;