import React from 'react';
import lodash from 'lodash';
import {browserHistory} from 'react-router';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const styles = lodash.cloneDeep(this.constructor.styles);

        return (
            <div style={styles.Wrapper}>
                <h1>Sidebar</h1>
            </div>
        );
    }
}

Sidebar.styles = {

};

export default Sidebar;