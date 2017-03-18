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
            <div style={styles.Wrapper}>
                <h1>Top bar</h1>
            </div>
        );
    }
}

Topbar.styles = {

};

export default Topbar;